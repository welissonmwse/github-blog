export function Post(){
  return (
    <div className="rounded-[10px] p-8 bg-base-post">
      <header className="flex gap-2 items-start">
        <h3 className="font-nunito text-xl font-bold text-base-title leading-8">
          JavaScript data types and data structures
        </h3>
        <span className="text-base-span font-nunito text-sm font-normal whitespace-nowrap leading-8">
          Há 1 dia
        </span>
      </header>
      <p className="mt-5 text-base-text font-nunito text-sm font-normal leading-[25.6px]">
        Programming languages all have built-in data structures, 
        but these often differ from one language to another. 
        This article attempts to list the built-in data structures available in...
      </p>
    </div>
  )
}