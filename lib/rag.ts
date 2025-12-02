import fs from 'fs'
import path from 'path'

export type EmbeddingEntry = {
  id: string
  text: string
  vector: number[]
}

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
}

export function hashEmbed(text: string, dim = 512): number[] {
  const v = new Float32Array(dim)
  const toks = tokenize(text)
  for (const t of toks) {
    // simple unsigned 32-bit hash
    let h = 2166136261
    for (let i = 0; i < t.length; i++) h = (h ^ t.charCodeAt(i)) * 16777619 >>> 0
    const idx = h % dim
    v[idx] += 1
  }
  // l2 normalize
  let norm = 0
  for (let i = 0; i < dim; i++) norm += v[i] * v[i]
  norm = Math.sqrt(norm) || 1
  for (let i = 0; i < dim; i++) v[i] /= norm
  return Array.from(v)
}

export function cosine(a: number[], b: number[]): number {
  let s = 0
  const n = Math.min(a.length, b.length)
  for (let i = 0; i < n; i++) s += a[i] * b[i]
  return s
}

export function chunkText(text: string, size = 900, overlap = 150): string[] {
  const paragraphs = text.split(/\n\s*\n/)
  const chunks: string[] = []
  let buf: string[] = []
  let len = 0
  for (const p of paragraphs) {
    const pl = p.length
    if (len + pl + 2 <= size) {
      buf.push(p)
      len += pl + 2
    } else {
      if (buf.length) chunks.push(buf.join('\n\n'))
      // start new buffer with overlap from end of previous
      const last = buf.join(' ').slice(-overlap)
      buf = last ? [last, p] : [p]
      len = (last ? last.length + 1 : 0) + pl
    }
  }
  if (buf.length) chunks.push(buf.join('\n\n'))
  return chunks
}

export function loadEmbeddings(): EmbeddingEntry[] {
  const p = path.join(process.cwd(), 'lib', 'embeddings.json')
  if (!fs.existsSync(p)) return []
  const raw = fs.readFileSync(p, 'utf8')
  const data = JSON.parse(raw) as EmbeddingEntry[]
  return data
}

export function search(query: string, entries: EmbeddingEntry[], k = 5) {
  const qv = hashEmbed(query)
  const scored = entries.map(e => ({ e, s: cosine(qv, e.vector) }))
  scored.sort((a, b) => b.s - a.s)
  return scored.slice(0, k)
}

export function extractiveAnswer(query: string, contexts: string[], maxChars = 800): string {
  const terms = new Set(tokenize(query).filter(t => t.length > 2))
  const sentences = contexts
    .join(' ')
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean)

  const scored = sentences.map(s => {
    const toks = tokenize(s)
    let score = 0
    for (const t of toks) if (terms.has(t)) score += 1
    return { s, score }
  }).sort((a, b) => b.score - a.score)

  const picked: string[] = []
  let total = 0
  for (const { s } of scored) {
    if (picked.includes(s)) continue
    if (total + s.length + 1 > maxChars) break
    picked.push(s)
    total += s.length + 1
    if (picked.length >= 6) break
  }
  return picked.length ? picked.join(' ') : ''
}
