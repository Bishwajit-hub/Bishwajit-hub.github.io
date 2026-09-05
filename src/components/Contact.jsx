import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-12 border-t border-line">
      <div className="bg-ink text-bg rounded-2xl px-6 py-10 sm:px-10 flex flex-wrap justify-between items-center gap-6">
        <div>
          <h3 className="font-heading text-2xl mb-2">Let's talk.</h3>
          <p className="text-[#B7C1C4] max-w-[44ch] text-[14.5px]">
            Looking for a back-end, front-end, or full-stack internship starting September 2026. Happy to share
            code, walk through any project, or answer questions.
          </p>
        </div>
        <div className="flex flex-col gap-2.5 text-[13.5px]">
          <a href={`mailto:${profile.email}`} className="border-b border-[#34423F] pb-0.5 hover:text-[#8FD1B8] w-fit">
            {profile.email}
          </a>
          <a href={profile.phoneHref} className="border-b border-[#34423F] pb-0.5 hover:text-[#8FD1B8] w-fit">
            {profile.phone}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener"
            className="border-b border-[#34423F] pb-0.5 hover:text-[#8FD1B8] w-fit"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener"
            className="border-b border-[#34423F] pb-0.5 hover:text-[#8FD1B8] w-fit"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
