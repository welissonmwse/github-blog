import { FaCalendarDay, FaChevronLeft, FaComment, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export function Post(){
  return (
    <main className="max-w-4xl mx-auto mt-[-88px]">
      <header className="p-8 rounded-[0.625rem] bg-base-profile">
        <nav className="flex justify-between">
          <a href="#" className="flex gap-2 items-center font-nunito font-bold text-xs text-blue">
            <FaChevronLeft />
            VOLTAR
          </a>
          <a href="#" className="flex gap-2 items-center font-nunito font-bold text-xs text-blue">
            VER NO GITHUB
            <FaExternalLinkAlt />
          </a>
        </nav>
        <h1 className="mt-5 font-nunito font-bold text-2xl text-base-title">JavaScript data types and data structures</h1>
        <div className="flex items-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <FaGithub className="text-base-label" />
            <p className="font-nunito text-base-text font-normal text-base leading-6">cameronwll</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarDay className="text-base-label" />
            <p className="font-nunito text-base-text font-normal text-base leading-6">Há 1 dia</p>
          </div>
          <div className="flex items-center gap-2">
            <FaComment className="text-base-label" />
            <p className="font-nunito text-base-text font-normal text-base leading-6">5 comentários</p>
          </div>
        </div>
      </header>
    </main>
  )
}