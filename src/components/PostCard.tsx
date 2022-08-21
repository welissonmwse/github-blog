import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { NavLink } from "react-router-dom"

interface PostsProps {
  number: number
  title: string
  body: string
  created_at: string
}

export function PostCard({number, title, body, created_at}:PostsProps){
  const publishedDateRelativeNow = formatDistanceToNow(new Date(created_at),{
    locale: ptBR,
    addSuffix: true,
  })
  const paragraphs = body.split(/;?\r\n|;?\n|;?\r/)

  return (
    <NavLink to={`/post/${number}`} className="rounded-[10px] p-8 bg-base-post border-solid border-2 border-base-post hover:border-base-label">
      <header className="flex gap-2 items-start">
        <h3 className="font-nunito text-xl font-bold text-base-title leading-8">
          {title}
        </h3>
        <span className="text-base-span font-nunito text-sm font-normal whitespace-nowrap leading-8">
          {publishedDateRelativeNow}
        </span>
      </header>
      <p className="mt-5 text-base-text font-nunito text-sm font-normal leading-[25.6px]">
        {paragraphs[0]}
      </p>
    </NavLink>
  )
}