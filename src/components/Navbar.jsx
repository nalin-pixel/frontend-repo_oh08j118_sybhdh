import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-3">
          <div className="relative">
            <span className="absolute inset-0 rounded-xl blur-md bg-gradient-to-tr from-fuchsia-500/40 via-blue-500/40 to-cyan-400/40"></span>
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-blue-500" />
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">Nebula Studio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-slate-300 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors">
            Start a project
          </a>
        </nav>

        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="md:hidden text-white">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors">
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
