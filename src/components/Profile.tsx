import { useEffect, useState } from 'react'
import {FaExternalLinkAlt, FaBuilding, FaUserFriends, FaGithub} from 'react-icons/fa'

interface ProfileDataProps {
  name: string
  bio: string | null
  followers: number
  company: string | null
  userName: string
  avatar: string
}

export function Profile() {
  const [user, setUser] = useState<ProfileDataProps>()

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.github.com/users/welissonmwse')
      const data = await response.json()
      const newUser = {
        name: data.name,
        bio: data.bio,
        followers: data.followers,
        company: data.company,
        userName: data.login,
        avatar: data.avatar_url
      }
      setUser(newUser)
    })()
  }, [])

  return(
    <div className="flex items-center gap-8 p-8 rounded-[0.625rem] bg-base-profile">
      <div className="min-w-[148px] h-[148px] rounded-lg overflow-hidden">
        <img className="object-cover w-full h-full" src={user?.avatar} alt="" />
      </div>
      <div className="w-full min-h-full flex flex-col">
        <header className="flex justify-between">
          <h1 className="text-base-title font-bold text-2xl font-nunito leading-8">{user?.name}</h1>
          <a className="flex gap-2 items-center font-bold font-nunito text-xs text-blue" 
            href={`https://github.com/${user?.userName}`}
            target="_blank"
          >
            GITHUB
            <FaExternalLinkAlt />
          </a>
        </header>
        <p className="font-nunito text-base-text font-normal text-base leading-6 mt-2">
          {user?.bio}
        </p>
        <footer className="flex items-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <FaGithub className="text-base-label" />
            <p className="font-nunito text-base-text font-normal text-base leading-6">{user?.userName}</p>
          </div>
          {user?.company && (
            <div className="flex items-center gap-2">
              <FaBuilding className="text-base-label" />
              <p className="font-nunito text-base-text font-normal text-base leading-6">{user?.company}</p>
            </div>
          )}
          <div className="flex items-center gap-2">
            <FaUserFriends className="text-base-label" />
              {user?.followers === 1 ? (
                <p className="font-nunito text-base-text font-normal text-base leading-6">
                  {user?.followers} seguidor
                </p>
              ) : (
                <p className="font-nunito text-base-text font-normal text-base leading-6">
                  {user?.followers} seguidores
                </p>
              )}
          </div>
        </footer>
      </div>
    </div>
  )
}