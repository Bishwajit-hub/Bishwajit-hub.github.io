import { Cloud, Code2, Database, ListChecks } from 'lucide-react'
import { skills } from '../data'
import Reveal from './Reveal'

const icons = { Code2, Database, Cloud, ListChecks }

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-line">
      <Reveal>
        <span className="font-mono text-xs text-accent tracking-widest uppercase">Toolbox</span>
        <h2 className="font-heading font-extrabold text-3xl mt-2 mb-3">Skills</h2>
        <p className="text-inkdim text-[15px] mb-12 max-w-[60ch]">
          Technologies and practices I've worked with across coursework and projects.
        </p>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((group, i) => {
          const Icon = icons[group.icon]
          return (
            <Reveal key={group.group} delay={i * 80}>
              <div className="bg-card border border-line rounded-2xl px-6 py-5 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent grid place-items-center">
                    <Icon size={16} />
                  </div>
                  <h4 className="font-heading text-[15px] font-bold">{group.group}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[13px] px-3 py-1.5 rounded-full bg-bg border border-line"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
