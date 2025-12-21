import ThemeToggle from "../components/hooks/ThemeToggle"
import { navItems } from "../constants/navItems"
import { NavItem } from "../components/Nav-items"

export default function DesktopNav({ active }) {
  return (
    <div className="hidden md:flex space-x-6">
      {navItems.map(item => (
        <NavItem
          key={item.href}
          item={item}
          active={active === item.href.slice(1)}
        />
      ))}
      <ThemeToggle />
    </div>
  )
}
