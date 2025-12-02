"use client"
import { useState } from 'react'

type ChatMessage = {
  role: 'user' | 'assistant'
  text: string
  isHtml?: boolean
}

export function Assistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', text: 'Hi! I answer strictly from Botchki\'s validated resume. Ask about experience, freelance work, tech stacks, or deployments.' }
  ])
  const [size, setSize] = useState({ width: 630, height: 780 })

  function startResize(e: React.PointerEvent<HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
    const startX = e.clientX
    const startY = e.clientY
    const startW = size.width
    const startH = size.height

    function onPointerMove(event: PointerEvent) {
      const deltaX = event.clientX - startX
      const deltaY = event.clientY - startY
      const nextW = Math.min(900, Math.max(360, startW + deltaX))
      const nextH = Math.min(900, Math.max(360, startH + deltaY))
      setSize({ width: nextW, height: nextH })
    }

    function onPointerUp() {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
  }

  async function send() {
    if (!input.trim() || isSending) return
    const q = input.trim()
    setMessages(m => [...m, { role: 'user', text: q }])
    setInput('')
    setIsSending(true)

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q })
      })

      const payload = await res.json().catch(() => ({})) as { reply?: string; error?: string }

      if (!res.ok) {
        throw new Error(payload?.error || 'The assistant is unavailable right now. Please try again in a moment.')
      }

      const reply = payload.reply ?? 'I couldn\'t find that in the resume, but feel free to ask about another project or skill.'
      setMessages(m => [...m, { role: 'assistant', text: reply, isHtml: Boolean(payload.reply) }])
    } catch (error) {
      const message = (error as Error).message || 'Unexpected error talking to the assistant.'
      setMessages(m => [...m, { role: 'assistant', text: message }])
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-cyan-500/90 px-4 py-3 font-medium shadow-soft hover:bg-cyan-400"
        >
          Ask about Botchki
        </button>
      )}
      {open && (
        <div
          className="card relative flex flex-col bg-surface/80 backdrop-blur-md border border-white/10 shadow-soft"
          style={{ width: size.width, height: size.height }}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <span className="font-semibold">AI Assistant</span>
            <button className="text-sm text-gray-400 hover:text-white" onClick={()=>setOpen(false)}>Close</button>
          </div>
          <div className="flex-1 px-2 pb-2">
            <iframe
              title="Portfolio Chatbot"
              src="https://butchai-portfolio-chatbot.hf.space"
              className="h-full w-full rounded bg-transparent"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer"
              allow="clipboard-read; clipboard-write; fullscreen"
            />
          </div>
          {/* <div
            className="absolute top-2 left-2 h-5 w-5 cursor-nwse-resize rounded-md bg-white/5"
            onPointerDown={startResize}
          /> */}
        </div>
      )}
    </div>
  )
}
