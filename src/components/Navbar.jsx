import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun, Download } from 'lucide-react'
import { profile } from '../data'
import useTheme from '../hooks/useTheme'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [theme, toggleTheme] = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex justify-between items-center py-4">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 ring-2 ring-line group-hover:ring-accent transition-colors">
            <img src={profile.photo} alt="" className="w-full h-full object-cover block" />
          </div>
          <span className="font-heading font-extrabold text-base tracking-tight">{profile.name}</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-inkdim">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="w-9 h-9 grid place-items-center rounded-full border border-line text-inkdim hover:text-ink hover:border-accent transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 font-semibold text-sm px-4 py-2 rounded-full bg-ink text-bg hover:bg-accent transition-colors"
          >
            <Download size={14} /> CV
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="w-9 h-9 grid place-items-center rounded-full border border-line text-inkdim"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="w-9 h-9 grid place-items-center rounded-full border border-line text-ink"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-bg px-5 py-4 flex flex-col gap-4 text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-inkdim hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-1.5 font-semibold px-4 py-2.5 rounded-full bg-ink text-bg"
          >
            <Download size={14} /> Download CV
          </a>
        </div>
      )}
    </div>
  )
}
