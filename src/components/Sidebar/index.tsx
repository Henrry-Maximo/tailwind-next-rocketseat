'use client'

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
  Menu,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './MainItem/Navitem'
import { UsedSpaceWidget } from './MainUsedSpaceWidget/UsedSpaceWidget'
import { Profile } from './MainProfile/Profile'

import * as Collpasible from '@radix-ui/react-collapsible'
import * as Input from '../Input/Input'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collpasible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:h-screen lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:h-screen dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />
        <Collpasible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collpasible.Trigger>
      </div>

      <Collpasible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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

          <div className="h-px bg-slate-100 dark:bg-zinc-700"></div>

          <Profile />
        </div>
      </Collpasible.Content>
    </Collpasible.Root>
  )
}
