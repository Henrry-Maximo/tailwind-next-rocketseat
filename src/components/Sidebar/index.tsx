import {
  Search,
  BarChart,
  CheckSquare,
  Flag,
  History,
  HomeIcon,
  LayoutDashboard,
  SquareStack,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './MainNavigation/Navitem'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="border-0bg-transparent flex-1 p-0 text-zinc-900 placeholder-zinc-600 outline-0"
          placeholder="Search"
        />
      </div>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={HomeIcon} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
        <NavItem title="Analytics" icon={LayoutDashboard} />
        <NavItem title="About" icon={History} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">footer</div>
    </aside>
  )
}
