import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="py-12 border-t border-line">
      <h2 className="font-heading font-extrabold text-2xl mb-2">Skills</h2>
      <p className="text-inkdim text-[14.5px] mb-9 max-w-[60ch]">
        Technologies and practices I've worked with across coursework and projects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((group) => (
          <div
            key={group.group}
            className="bg-card border border-line rounded-xl px-6 py-5 transition-all hover:shadow-[0_14px_30px_-18px_rgba(23,27,29,0.25)] hover:-translate-y-0.5"
          >
            <h4 className="font-heading text-sm font-bold text-inkdim mb-3.5">{group.group}</h4>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="text-[13px] px-3 py-1.5 rounded-full bg-bg border border-line">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
