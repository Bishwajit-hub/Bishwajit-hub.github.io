import { languages } from '../data'

export default function Languages() {
  return (
    <section id="languages" className="py-12 border-t border-line">
      <h2 className="font-heading font-extrabold text-2xl mb-6">Languages</h2>
      <div className="flex flex-wrap gap-7">
        {languages.map((lang) => (
          <div key={lang.name} className="bg-card border border-line rounded-[10px] px-5 py-4 min-w-[160px]">
            <div className="font-heading font-bold text-[14.5px] mb-1">{lang.name}</div>
            <div className="text-[12.5px] text-inkdim">{lang.level}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
