import { useEffect, useState } from "react";
import { PostCard } from "../components/PostCard";
import { Profile } from "../components/Profile";
import { api } from "../services/api";

interface PostsDataProsp {
  id: number
  number: number
  title: string
  body: string
  created_at: string
}

export function Home(){
  const [posts, setPosts] = useState<PostsDataProsp[]>([])
  // repo:rocketseat-education/reactjs-github-blog-challenge

  useEffect(() => {
    (async () => {
      const  response  = await api.get('search/issues', {
        params: {
          q: 'repo:rocketseat-education/reactjs-github-blog-challenge'
        }
      })
      
      const postsData = response.data.items.map(post => {
        return {
          id: post.id,
          number: post.number,
          title: post.title,
          body: post.body,
          created_at: post.created_at
        }
      })
      setPosts(postsData);
      console.log(postsData);
    })()
  }, [])

  return (
    <main className="max-w-4xl mx-auto mt-[-88px]">
      <Profile />
      <header className="flex justify-between items-center mt-[72px]">
        <h2 className="text-base-subtitle font-nunito text-lg font-bold">Publicações</h2>
        <p className="font-nunito text-base-span font-normal text-sm">6 publicações</p>
      </header>
      <form className="mt-3" action="">
        <input className="placeholder:font-nunito placeholder:text-base-label py-3 px-4 rounded-md w-full bg-base-input border border-base-border text-base-text focus:border-blue outline-0" 
          type="text" 
          placeholder="Buscar conteúdo" 
        />
      </form>
      <section className="grid grid-cols-2 gap-8 my-12">
        {posts.map(post => (
          <PostCard 
            key={post.id}
            number={post.number}
            title={post.title}
            body={post.body}
            created_at={post.created_at}
          />
        ))}
        
      </section>
    </main>
  )
}