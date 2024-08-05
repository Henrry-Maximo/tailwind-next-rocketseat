import {
  BarChart,
  CheckSquare,
  Flag,
  History,
  HomeIcon,
  LayoutDashboard,
  SquareStack,
  Users,
  LifeBuoy,
  Cog,
  Search,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './MainItem/Navitem'
import { UsedSpaceWidget } from './MainUsedSpaceWidget/UsedSpaceWidget'
import { Profile } from './MainProfile/Profile'
import * as Input from '../Input/Input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

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

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-slate-100"></div>

        <Profile />
      </div>
    </aside>
  )
}
