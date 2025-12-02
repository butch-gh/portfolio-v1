"use client"

import { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { projectsTable } from '@/lib/content'

export function ProjectGrid({ showAll = false }: { showAll?: boolean }) {
  const [openKey, setOpenKey] = useState<string | null>(null)
  const list = showAll ? projectsTable : projectsTable.slice(0, 5)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.4 })

  const toggleRow = (key: string) => {
    setOpenKey(prev => (prev === key ? null : key))
  }

  return (
    <div ref={containerRef} className="mt-8 rounded-2xl bg-transparent">
      <div className="grid grid-cols-[80px_1.6fr_1.2fr_1.6fr] gap-4 px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
        <span>Year</span>
        <span>Project</span>
        <span>Company</span>
        <span>Built with</span>
      </div>
      <div className="divide-y divide-white/5">
        {list.map((row, index) => {
          const key = `${row.year}-${row.project}`
          const isOpen = openKey === key
          return (
            <motion.div
              key={key}
              className="overflow-hidden"
              initial={{ x: 40, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
            >
              <button
                type="button"
                onClick={() => toggleRow(key)}
                className="grid w-full grid-cols-[80px_1.6fr_1.2fr_1.6fr] items-center gap-4 px-6 py-4 text-left text-sm"
              >
                <span className="text-gray-400">{row.year}</span>
                <span className="font-medium text-white underline-offset-4 hover:underline">{row.project}</span>
                <span className="text-gray-300">{row.company}</span>
                <div className="flex flex-wrap gap-2">
                  {row.stack.map(tech => (
                    <span
                      key={tech}
                      className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, x: 40 }}
                    animate={{ height: 'auto', opacity: 1, x: 0 }}
                    exit={{ height: 0, opacity: 0, x: 40 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <div className="px-6 pb-6 pt-3 text-sm text-gray-100">
                      <motion.div
                        key={`${key}-content`}
                        className="space-y-3 rounded-xl bg-white/2 p-4"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{ hidden: {}, visible: {} }}
                      >
                        {row.summary && (
                          <motion.p
                            variants={{ hidden: { x: 25, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                            transition={{ duration: 0.25, delay: 0.05, ease: 'easeOut' }}
                            exit={{ x: 25, opacity: 0, transition: { duration: 0.2 } }}
                            className="text-base font-medium text-white/90"
                          >
                            {row.summary}
                          </motion.p>
                        )}
                        {row.role && (
                          <motion.p
                            variants={{ hidden: { x: 25, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                            transition={{ duration: 0.25, delay: 0.15, ease: 'easeOut' }}
                            exit={{ x: 25, opacity: 0, transition: { duration: 0.2 } }}
                            className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200"
                          >
                            {row.role}
                          </motion.p>
                        )}
                        {row.responsibilities && row.responsibilities.length > 0 && (
                          <motion.div
                            variants={{ hidden: { x: 25, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                            transition={{ duration: 0.25, delay: 0.25, ease: 'easeOut' }}
                            exit={{ x: 25, opacity: 0, transition: { duration: 0.2 } }}
                            className="rounded-lg border border-white/10 bg-white/2 p-3"
                          >
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                              Responsibilities
                            </p>
                            <ul className="space-y-2 text-sm text-gray-200">
                              {row.responsibilities.map((item, idx) => (
                                <li key={`${key}-resp-${idx}`} className="flex gap-2">
                                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-300" aria-hidden />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
