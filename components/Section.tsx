"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function Section({ id, title, children }: { id?: string; title?: string; children: ReactNode }) {
  return (
    <section id={id} className="section">
      <div className="container">
        {title && (
          <motion.h2
            className="h2 mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
              opacity: { duration: 0.9, ease: 'easeOut' }
            }}
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  )
}
