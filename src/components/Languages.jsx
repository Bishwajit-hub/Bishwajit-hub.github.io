import { languages } from '../data'
import Reveal from './Reveal'

export default function Languages() {
  return (
    <section id="languages" className="pb-16 sm:pb-20">
      <Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {languages.map((lang) => (
            <div key={lang.name} className="bg-card border border-line rounded-2xl px-5 py-4">
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-heading font-bold text-[14.5px]">{lang.name}</span>
              </div>
              <div className="h-1.5 rounded-full bg-line overflow-hidden mb-2">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-green"
                  style={{ width: `${lang.pct}%` }}
                />
              </div>
              <div className="text-[12px] text-inkdim">{lang.level}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
