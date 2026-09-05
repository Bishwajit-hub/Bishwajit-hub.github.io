import { ArrowDown, Mail, MapPin, Phone } from 'lucide-react'
import { profile, stats } from '../data'
import Reveal from './Reveal'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Hero() {
  return (
    <section id="top" className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[26rem] h-[26rem] rounded-full bg-accent/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-24 w-72 h-72 rounded-full bg-green/20 blur-[100px]"
      />

      <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-green border border-line bg-card px-3.5 py-1.5 rounded-full mb-7 shadow-sm">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
            </span>
            {profile.availability}
          </div>

          <h1 className="font-heading font-extrabold text-[2.4rem] leading-[1.08] tracking-tight mb-5 sm:text-6xl">
            Hi, I'm {profile.name.split(' ')[0]}.
            <br />
            <span className="bg-gradient-to-r from-accent to-green bg-clip-text text-transparent">
              {profile.role}
            </span>
          </h1>

          <p className="max-w-[56ch] text-inkdim text-[1.05rem] mb-8 leading-relaxed">{profile.lede}</p>

          <div className="flex flex-wrap gap-3 mb-9">
            <a
              className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full bg-ink text-bg shadow-lg shadow-ink/10 transition-all hover:bg-accent hover:-translate-y-0.5"
              href={`mailto:${profile.email}`}
            >
              <Mail size={16} /> Get in touch
            </a>
            <a
              className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full border border-line bg-card transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
              href={profile.github}
              target="_blank"
              rel="noopener"
            >
              <GithubIcon size={16} /> GitHub
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13.5px] text-inkdim">
            <a href={profile.phoneHref} className="inline-flex items-center gap-1.5 hover:text-accent">
              <Phone size={14} /> {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 hover:text-accent"
            >
              <LinkedinIcon size={14} /> LinkedIn
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> {profile.location}
            </span>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative justify-self-start md:justify-self-end">
            <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-[2rem] overflow-hidden border-4 border-card shadow-[0_0_0_1px_rgb(var(--line)),0_25px_50px_-15px_rgba(0,0,0,0.3)] rotate-2 hover:rotate-0 transition-transform duration-300 animate-float">
              <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover block" />
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={250}>
        <div className="relative mt-16 grid grid-cols-3 gap-4 sm:gap-8 border-t border-line pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">{s.value}</div>
              <div className="text-inkdim text-xs sm:text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="hidden sm:flex absolute left-1/2 -translate-x-1/2 bottom-0 items-center justify-center w-10 h-10 rounded-full border border-line text-inkdim hover:text-accent hover:border-accent animate-bounce"
      >
        <ArrowDown size={16} />
      </a>
    </section>
  )
}
