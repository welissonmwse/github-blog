import { PostCard } from "../components/PostCard";
import { Profile } from "../components/Profile";

export function Home(){
  return (
    <main className="max-w-4xl mx-auto mt-[-88px]">
      <Profile />
      <header className="flex justify-between items-center mt-[72px]">
        <h2 className="text-base-subtitle font-nunito text-lg font-bold">Publicações</h2>
        <p className="font-nunito text-base-span font-normal text-sm">6 publicações</p>
      </header>
      <form className="mt-3" action="">
        <input className="placeholder:font-nunito placeholder:text-base-label py-3 px-4 rounded-md w-full bg-base-input border border-base-border text-base-text" 
          type="text" 
          placeholder="Buscar conteúdo" 
        />
      </form>
      <section className="grid grid-cols-2 gap-8 my-12">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
    </main>
  )
}