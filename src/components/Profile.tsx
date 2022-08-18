import {FaExternalLinkAlt, FaBuilding, FaUserFriends, FaGithub} from 'react-icons/fa'

export function Profile() {
  return(
    <div className="flex items-center gap-8 p-8 rounded-[0.625rem] bg-base-profile">
      <div className="min-w-[148px] h-[148px] rounded-lg overflow-hidden">
        <img className="object-cover w-full h-full" src="https://github.com/welissonmwse.png" alt="" />
      </div>
      <div>
        <header className="flex justify-between">
          <h1 className="text-base-title font-bold text-2xl font-nunito leading-8">Welisson Silveira</h1>
          <a className="flex gap-2 items-center font-bold font-nunito text-xs text-blue" href="#">
            GITHUB
            <FaExternalLinkAlt />
          </a>
        </header>
        <p className="font-nunito text-base-text font-normal text-base leading-6 mt-2">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. 
          Eu viverra massa quam dignissim aenean malesuada suscipit. 
          Nunc, volutpat pulvinar vel mass.
        </p>
        <footer className="flex items-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <FaGithub className="text-base-label" />
            <p className="font-nunito text-base-text font-normal text-base leading-6">cameronwll</p>
          </div>
          <div className="flex items-center gap-2">
            <FaBuilding className="text-base-label" />
            <p className="font-nunito text-base-text font-normal text-base leading-6">Rocketseat</p>
          </div>
          <div className="flex items-center gap-2">
            <FaUserFriends className="text-base-label" />
            <p className="font-nunito text-base-text font-normal text-base leading-6">32 seguidores</p>
          </div>
        </footer>
      </div>
    </div>
  )
}