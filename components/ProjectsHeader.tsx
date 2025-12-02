"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export function ProjectsHeader() {
  return (
    <div className="mb-6 flex flex-col flex-wrap justify-between gap-1">
      <Link
        href="/#projects"
        className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300"
      >
        <span className="transition group-hover:-translate-x-1">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span>Go Back</span>
      </Link>
      <motion.h2
        className="h2 mb-0"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        In-House Projects
      </motion.h2>
    </div>
  )
}
