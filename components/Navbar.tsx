"use client"
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/50 border-b border-white/5">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">Botchki Pielago</Link>
        <button className="sm:hidden rounded px-3 py-2 bg-white/10" onClick={() => setOpen(v=>!v)}>Menu</button>
        <ul className="hidden sm:flex items-center gap-6 text-sm text-gray-300">
          <li><Link href="/#about" className="hover:text-white">About Me</Link></li>
          <li><Link href="/#projects" className="hover:text-white">Projects</Link></li>
          <li><Link href="/#experience" className="hover:text-white">Experience</Link></li>
          <li><Link href="/#skills" className="hover:text-white">Skills</Link></li>
          <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
        </ul>
      </nav>
      {open && (
        <motion.ul initial={{height:0}} animate={{height:'auto'}} className="sm:hidden overflow-hidden border-t border-white/5">
          {['about','projects','experience','skills','contact'].map(s => (
            <li key={s}>
              <a href={`/#${s}`} className="block px-6 py-3 hover:bg-white/5" onClick={()=>setOpen(false)}>{s[0].toUpperCase()+s.slice(1)}</a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  )
}
