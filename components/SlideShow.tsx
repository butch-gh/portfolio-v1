"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export type SlideShowProps = {
  title: string
  images: string[] // paths under /public, e.g. '/slides/adc-static/img1.jpg'
  open: boolean
  onClose: () => void
}

export function SlideShow({ title, images, open, onClose }: SlideShowProps) {
  const [index, setIndex] = React.useState(0)
  const hasImages = images && images.length > 0

  React.useEffect(() => {
    if (!open) setIndex(0)
  }, [open])

  const prev = () => setIndex(i => (i - 1 + images.length) % images.length)
  const next = () => setIndex(i => (i + 1) % images.length)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70" onClick={onClose} />
          <motion.div
            className="relative z-10 w-[98vw] max-w-[1400px] h-[88vh] rounded-xl bg-neutral-900 shadow-2xl ring-1 ring-white/10"
            initial={{ scale: 0.98, y: 8, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, y: 8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <h3 className="text-white font-semibold text-sm sm:text-base">{title}</h3>
              <button onClick={onClose} className="rounded-md px-3 py-1 text-sm bg-white/10 hover:bg-white/20 text-white">Close</button>
            </div>
            <div className="flex h-[calc(88vh-64px)] flex-col gap-3 p-2">
              {hasImages ? (
                <div className="relative mx-auto w-full flex-1 min-h-0 overflow-hidden rounded-lg ring-1 ring-white/10 bg-black">
                  <Image
                    src={images[index]}
                    alt={`${title} slide ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain object-center"
                    draggable={false}
                    style={{ objectFit: 'contain', objectPosition: 'center center' }}
                    priority={false}
                  />
                </div>
              ) : (
                <div className="flex flex-1 items-center justify-center text-gray-400">No slides available.</div>
              )}

              {hasImages && (
                <div className="flex items-center justify-between px-2">
                  <button onClick={prev} className="rounded-md px-4 py-2 bg-white/10 hover:bg-white/20 text-white">Prev</button>
                  <span className="text-gray-300 text-sm">{index + 1} / {images.length}</span>
                  <button onClick={next} className="rounded-md px-4 py-2 bg-white/10 hover:bg-white/20 text-white">Next</button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
