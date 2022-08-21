import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import { FaCalendarDay, FaChevronLeft, FaComment, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { api } from "../services/api";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ContentPostLoading, HeaderPostLoading } from "../components/Loading";

interface IssueDataProps {
  comments: number
  created_at: string
  user: string
  title: string
  body: string
  repository_url: string
}

export function Post(){
  const { issueNumber } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [issue, setIssue] = useState<IssueDataProps>({
    comments: 0,
    created_at: '',
    user: '',
    title: '',
    body: '',
    repository_url: ''
  })

  
  useEffect(() => {
    (async () => {
      setIsLoading(true)
      const response = await api.get(`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${issueNumber}`)
      
      const publishedDateRelativeNow = formatDistanceToNow(new Date(response.data.created_at),{
        locale: ptBR,
        addSuffix: true,
      })

      setIssue({
        body: response.data.body,
        comments: response.data.comments,
        created_at: publishedDateRelativeNow,
        title: response.data.title,
        user: response.data.user.login,
        repository_url: response.data.html_url
      })
      setIsLoading(false)
    })()
  }, [])

  return (
    <main className="max-w-4xl mx-auto mt-[-88px]">
      <header className="p-8 rounded-[0.625rem] bg-base-profile">
        {isLoading ? (
          <HeaderPostLoading />
        ) : (
          <>
            <nav className="flex justify-between">
              <NavLink to="/" className="flex gap-2 items-center font-nunito font-bold text-xs text-blue hover:underline">
                <FaChevronLeft />
                VOLTAR
              </NavLink>
              <a href={issue.repository_url} 
                className="flex gap-2 items-center font-nunito font-bold text-xs text-blue hover:underline"
                target="_blank"
              >
                VER NO GITHUB
                <FaExternalLinkAlt />
              </a>
            </nav>
            <h1 className="mt-5 font-nunito font-bold text-2xl text-base-title">{issue?.title}</h1>
            <div className="flex items-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <FaGithub className="text-base-label" />
                <p className="font-nunito text-base-text font-normal text-base leading-6">{issue?.user}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarDay className="text-base-label" />
                <p className="font-nunito text-base-text font-normal text-base leading-6">{issue.created_at}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaComment className="text-base-label" />
                <p className="font-nunito text-base-text font-normal text-base leading-6">{issue?.comments} comentários</p>
              </div>
            </div>
          </>
        )}
      </header>
      <div className="p-8 font-nunito text-base-text">
        {isLoading ? (
          <ContentPostLoading />
        ) : (
          <ReactMarkdown>
            {issue?.body}
          </ReactMarkdown>
        )}
      </div>
    </main>
  )
}