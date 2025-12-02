import { NextRequest, NextResponse } from 'next/server'
import { kb, QA } from '@/lib/kb'

function score(q: string, item: QA) {
  const query = q.toLowerCase()
  const hay = (item.q + ' ' + item.a).toLowerCase()
  // naive keyword scoring
  const terms = query.split(/\W+/).filter(Boolean)
  let s = 0
  for (const t of terms) {
    if (hay.includes(t)) s += 1
  }
  // prefer exact domain keywords
  for (const k of ['.net','react','typescript','microservices','azure','rabbitmq','postgresql','oracle','docker','kubernetes','devops'])
    if (hay.includes(k) && query.includes(k)) s += 2
  return s
}

export async function POST(req: NextRequest) {
  const { message } = await req.json()
  if (!message || typeof message !== 'string') {
    return NextResponse.json({ error: 'Invalid message' }, { status: 400 })
  }
  const ranked = kb
    .map(item => ({ item, s: score(message, item) }))
    .sort((a,b) => b.s - a.s)
    .slice(0, 2)
    .map(x => x.item)

  const reply = ranked.length
    ? ranked.map(r => r.a).join('\n\n')
    : "I specialize in .NET + React fullstack development, microservices, event-driven systems with RabbitMQ, and enterprise deployments. Ask about projects like IAS, Forecaster, Client Hive, EMCPRO, or DevOps experience."

  return NextResponse.json({ reply })
}
