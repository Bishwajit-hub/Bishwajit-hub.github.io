import { Briefcase, GraduationCap } from 'lucide-react'
import { timeline } from '../data'
import Reveal from './Reveal'

const iconFor = { work: Briefcase, education: GraduationCap }
const colorFor = { work: 'text-accent border-accent/40 bg-accent/10', education: 'text-green border-green/40 bg-green/10' }

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-line">
      <Reveal>
        <span className="font-mono text-xs text-accent tracking-widest uppercase">Background</span>
        <h2 className="font-heading font-extrabold text-3xl mt-2 mb-3">Experience & Education</h2>
        <p className="text-inkdim text-[15px] mb-12 max-w-[60ch]">Where I've worked and studied.</p>
      </Reveal>

      <div className="space-y-6">
        {timeline.map((item, i) => {
          const Icon = iconFor[item.type]
          return (
            <Reveal key={item.title} delay={i * 80}>
              <div className="flex gap-5 bg-card border border-line rounded-2xl p-6 sm:p-7">
                <div className={`shrink-0 w-11 h-11 rounded-xl border grid place-items-center ${colorFor[item.type]}`}>
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-inkdim">{item.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                  <p className="text-inkdim text-sm mb-3">{item.org}</p>
                  {item.bullets.length > 0 && (
                    <ul className="text-inkdim text-[14.5px] leading-relaxed space-y-1.5 list-disc pl-4">
                      {item.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
