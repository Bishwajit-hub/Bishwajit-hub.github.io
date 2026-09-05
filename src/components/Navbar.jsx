import { profile } from '../data'

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 bg-bg/90 backdrop-blur-sm border-b border-line">
      <div className="max-w-[860px] mx-auto px-5 sm:px-7 flex justify-between items-center py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden shrink-0">
            <img src={profile.photo} alt="" className="w-full h-full object-cover block" />
          </div>
          <div className="font-heading font-extrabold text-base">{profile.name}</div>
        </div>
        <div className="hidden sm:flex gap-6 text-[13.5px] text-inkdim">
          <a href="#journey" className="hover:text-accent">Journey</a>
          <a href="#skills" className="hover:text-accent">Skills</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </div>
      </div>
    </div>
  )
}
