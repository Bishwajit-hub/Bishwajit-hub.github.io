import { Mail, Phone } from 'lucide-react'
import { profile } from '../data'
import Reveal from './Reveal'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-line">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-ink text-bg px-6 py-12 sm:px-14 sm:py-16 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/30 blur-[100px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-green/30 blur-[100px]"
          />
          <div className="relative">
            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4">Let's build something.</h3>
            <p className="text-[#B7C1C4] max-w-[46ch] mx-auto text-[15px] mb-9">
              Looking for a back-end, front-end, or full-stack internship starting September 2026. Happy to share
              code, walk through any project, or answer questions.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-9">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full bg-bg text-ink transition-transform hover:-translate-y-0.5"
              >
                <Mail size={16} /> {profile.email}
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#B7C1C4]">
              <a href={profile.phoneHref} className="inline-flex items-center gap-1.5 hover:text-white">
                <Phone size={14} /> {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 hover:text-white"
              >
                <LinkedinIcon size={14} /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 hover:text-white"
              >
                <GithubIcon size={14} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
