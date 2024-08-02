import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        src="https://github.com/henrry-maximo.png"
        className="h-10 w-10 rounded-full"
        alt="foto de perfil"
      />
      <div className="flex flex-col truncate">
        <span className="font semibold text-sm text-zinc-700">
          Henrique Maximo
        </span>
        <span className="truncate text-sm text-zinc-500">
          henrrylimadasilva@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-100"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
