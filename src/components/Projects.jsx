import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-line">
      <Reveal>
        <span className="font-mono text-xs text-accent tracking-widest uppercase">Selected work</span>
        <h2 className="font-heading font-extrabold text-3xl mt-2 mb-3">Projects</h2>
        <p className="text-inkdim text-[15px] mb-12 max-w-[60ch]">
          A mix of academic and personal builds — from database design to full ordering systems.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <a
              href={p.link}
              target="_blank"
              rel="noopener"
              className="group relative flex flex-col h-full bg-card border border-line rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] hover:border-transparent"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${p.gradient}`} />
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div>
                    <h3 className="font-heading font-bold text-xl leading-tight">{p.title}</h3>
                    <p className="text-inkdim text-sm">{p.subtitle}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-inkdim group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-inkdim font-mono mb-4 mt-1">
                  <span>{p.org}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
                <ul className="text-inkdim text-[14px] leading-relaxed space-y-1.5 mb-5 list-disc pl-4">
                  {p.bullets.slice(0, 2).map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10.5px] text-inkdim border border-line px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
