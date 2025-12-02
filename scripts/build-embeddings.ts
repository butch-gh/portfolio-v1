/*
  Build embeddings.json from resume.doc using simple feature hashing.
  Run with: npx ts-node scripts/build-embeddings.ts (or ts-node/register)
*/
import fs from 'fs'
import path from 'path'
import { chunkText, hashEmbed, EmbeddingEntry } from '../lib/rag'

const resumePath = path.join(process.cwd(), 'resume.doc')
const outPath = path.join(process.cwd(), 'lib', 'embeddings.json')

function main() {
  if (!fs.existsSync(resumePath)) {
    console.error('resume.doc not found at', resumePath)
    process.exit(1)
  }
  const raw = fs.readFileSync(resumePath, 'utf8')
  const chunks = chunkText(raw, 1200, 200)
  const entries: EmbeddingEntry[] = chunks.map((text, i) => ({
    id: `chunk-${i.toString().padStart(3,'0')}`,
    text,
    vector: hashEmbed(text)
  }))
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, JSON.stringify(entries, null, 2), 'utf8')
  console.log(`Wrote ${entries.length} chunks to ${outPath}`)
}

main()
