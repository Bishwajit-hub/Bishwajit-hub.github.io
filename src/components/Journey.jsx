import { journey } from '../data'

const dotColor = {
  project: 'border-accent',
  work: 'border-inkdim',
  education: 'border-green',
}

const kindColor = {
  project: 'text-accent',
  work: 'text-inkdim',
  education: 'text-green',
}

export default function Journey() {
  return (
    <section id="journey" className="py-12 border-t border-line">
      <h2 className="font-heading font-extrabold text-2xl mb-2">Journey</h2>
      <p className="text-inkdim text-[14.5px] mb-9 max-w-[60ch]">
        Academic projects, work, and education — in the order they happened.
      </p>

      <div className="relative pl-7">
        <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-line" />

        {journey.map((item, i) => (
          <div key={i} className={`relative ${i === journey.length - 1 ? 'pb-0' : 'pb-9'}`}>
            <div
              className={`absolute -left-7 top-1.5 w-[11px] h-[11px] rounded-full bg-card border-2 ${dotColor[item.type]}`}
            />
            <div className="flex gap-2.5 items-center flex-wrap mb-1.5">
              <span
                className={`font-mono text-[10.5px] tracking-wide border border-line px-2 py-0.5 rounded-full ${kindColor[item.type]}`}
              >
                {item.kind}
              </span>
              <span className="font-mono text-xs text-inkdim">{item.date}</span>
            </div>
            <div className="font-heading font-bold text-lg mb-1">{item.title}</div>
            <div className="text-inkdim text-[13.5px] mb-3">{item.org}</div>
            {item.bullets.length > 0 && (
              <ul className="text-inkdim text-[14.5px] max-w-[64ch] list-disc pl-5 space-y-1.5">
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
            {item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3.5">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-inkdim border border-line bg-card px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener"
                className="inline-block mt-3.5 text-[13px] font-semibold text-accent border-b border-accent pb-px hover:opacity-70"
              >
                View repository →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
