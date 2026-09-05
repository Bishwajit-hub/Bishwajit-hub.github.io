import { profile } from '../data'

export default function Hero() {
  return (
    <section className="pt-14 pb-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
      <div>
        <div className="inline-flex items-center gap-2 font-mono text-xs text-green border border-line bg-card px-3 py-1.5 rounded-full mb-6">
          <span className="w-[7px] h-[7px] rounded-full bg-green" />
          {profile.availability}
        </div>
        <h1 className="font-heading font-extrabold text-[2.1rem] sm:text-5xl leading-[1.1] tracking-tight mb-4">
          {profile.name} —<br />
          <span className="text-accent">{profile.role}</span>
        </h1>
        <p className="max-w-[60ch] text-inkdim text-[1.05rem] mb-7">{profile.lede}</p>
        <div className="flex flex-wrap gap-3 mb-9">
          <a
            className="font-semibold text-sm px-5 py-2.5 rounded-lg border border-ink bg-ink text-white transition-colors hover:bg-accent hover:border-accent"
            href={profile.cv}
            target="_blank"
            rel="noopener"
          >
            Download CV
          </a>
          <a
            className="font-semibold text-sm px-5 py-2.5 rounded-lg border border-line bg-card transition-colors hover:border-accent hover:text-accent"
            href={profile.github}
            target="_blank"
            rel="noopener"
          >
            GitHub Profile
          </a>
          <a
            className="font-semibold text-sm px-5 py-2.5 rounded-lg border border-line bg-card transition-colors hover:border-accent hover:text-accent"
            href={`mailto:${profile.email}`}
          >
            Email Me
          </a>
        </div>
        <div className="flex flex-wrap gap-4 text-[13.5px] text-inkdim">
          <a href={profile.phoneHref} className="hover:text-accent">{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener" className="hover:text-accent">
            {profile.linkedinLabel}
          </a>
          <span>{profile.location}</span>
        </div>
      </div>
      <div className="w-[132px] h-[132px] md:w-[168px] md:h-[168px] rounded-full overflow-hidden border-4 border-card shadow-[0_0_0_1px_#DBE1DF,0_18px_40px_-18px_rgba(23,27,29,0.35)] shrink-0 justify-self-start md:justify-self-end">
        <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover block" />
      </div>
    </section>
  )
}
