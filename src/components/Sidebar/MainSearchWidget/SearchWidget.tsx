import { Search } from 'lucide-react'

export function SearchWidget() {
  return (
    <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
      <Search className="h-5 w-5 text-zinc-500" />
      <input
        className="border-0bg-transparent flex-1 p-0 text-zinc-900 placeholder-zinc-600 outline-0"
        placeholder="Search"
      />
    </div>
  )
}
