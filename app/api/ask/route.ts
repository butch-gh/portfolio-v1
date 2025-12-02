import { NextRequest, NextResponse } from 'next/server'

const DEFAULT_PREDICT_URL = 'https://butchai-portfolio-chatbot.hf.space/run/predict'
const HF_PREDICT_URL = process.env.HF_CHATBOT_URL ?? DEFAULT_PREDICT_URL

function buildHeaders(extra?: Record<string, string>) {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...extra
  }
}

function extractReply(dataField: unknown): string {
  if (!dataField) return ''
  if (typeof dataField === 'string') return dataField.trim()
  if (Array.isArray(dataField)) {
    for (const item of dataField) {
      const candidate = extractReply(item)
      if (candidate) return candidate
    }
    return ''
  }
  if (typeof dataField === 'object') {
    const maybe = (dataField as { text?: unknown; message?: unknown; value?: unknown })
    return extractReply(maybe.text ?? maybe.message ?? maybe.value)
  }
  return ''
}

export async function POST(req: NextRequest) {
  const { question } = await req.json().catch(() => ({ question: '' }))
  if (!question?.trim()) {
    return NextResponse.json({ error: 'Invalid question' }, { status: 400 })
  }

  try {
    const response = await fetch(HF_PREDICT_URL, {
      method: 'POST',
      headers: buildHeaders(),
      body: JSON.stringify({ data: [question.trim()] })
    })

    const raw = await response.text()
    if (!response.ok) {
      console.error('HF predict error:', response.status, raw)
      return NextResponse.json(
        { error: 'The Hugging Face Space returned an error.' },
        { status: response.status }
      )
    }

    let payload: { data?: unknown }
    try {
      payload = JSON.parse(raw)
    } catch (err) {
      console.error('Failed to parse HF predict response:', err, raw)
      return NextResponse.json(
        { error: 'Unable to parse the Hugging Face response JSON.' },
        { status: 502 }
      )
    }

    const reply = extractReply(payload?.data)
    if (!reply) {
      console.error('Hugging Face returned no usable content:', payload)
      return NextResponse.json(
        { error: 'Hugging Face returned an empty response.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Assistant route error:', error)
    return NextResponse.json(
      { error: 'Unable to reach the Hugging Face endpoint. Please try again shortly.' },
      { status: 500 }
    )
  }
}
