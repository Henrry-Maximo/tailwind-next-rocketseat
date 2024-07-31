import {
  BarChart,
  CheckSquare,
  Flag,
  History,
  HomeIcon,
  LayoutDashboard,
  SquareStack,
  Users,
} from 'lucide-react'
import { NavItem } from './Navitem'

export function MainNavigator() {
  return (
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
  )
}
