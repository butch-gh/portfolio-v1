// Build embeddings.json from resume.doc using simple feature hashing.
// Run: node scripts/build-embeddings.mjs
import fs from 'fs'
import path from 'path'

function tokenize(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean)
}

function hashEmbed(text, dim = 512) {
  const v = new Float32Array(dim)
  const toks = tokenize(text)
  for (const t of toks) {
    let h = 2166136261
    for (let i = 0; i < t.length; i++) h = (h ^ t.charCodeAt(i)) * 16777619 >>> 0
    v[h % dim] += 1
  }
  let norm = 0
  for (let i = 0; i < dim; i++) norm += v[i] * v[i]
  norm = Math.sqrt(norm) || 1
  for (let i = 0; i < dim; i++) v[i] /= norm
  return Array.from(v)
}

function chunkText(text, size = 1200, overlap = 200) {
  const paragraphs = text.split(/\n\s*\n/)
  const chunks = []
  let buf = []
  let len = 0
  for (const p of paragraphs) {
    const pl = p.length
    if (len + pl + 2 <= size) {
      buf.push(p)
      len += pl + 2
    } else {
      if (buf.length) chunks.push(buf.join('\n\n'))
      const last = buf.join(' ').slice(-overlap)
      buf = last ? [last, p] : [p]
      len = (last ? last.length + 1 : 0) + pl
    }
  }
  if (buf.length) chunks.push(buf.join('\n\n'))
  return chunks
}

const resumePath = path.join(process.cwd(), 'resume.doc')
const outPath = path.join(process.cwd(), 'lib', 'embeddings.json')

if (!fs.existsSync(resumePath)) {
  console.error('resume.doc not found at', resumePath)
  process.exit(1)
}

const raw = fs.readFileSync(resumePath, 'utf8')
const chunks = chunkText(raw, 1200, 200)
const entries = chunks.map((text, i) => ({ id: `chunk-${String(i).padStart(3,'0')}`, text, vector: hashEmbed(text) }))
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, JSON.stringify(entries, null, 2), 'utf8')
console.log(`Wrote ${entries.length} chunks to ${outPath}`)
