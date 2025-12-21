import React from "react"
import clsx from "clsx"

export const NavItem = React.memo(({ item, active }) => (
  <a
    href={item.href}
    className={clsx(
      "flex items-center tracking-wide rounded-lg transition-all duration-300",
      active
        ? "text-sky-400 dark:text-yellow-600 font-semibold bg-radial from-sky-500/15 dark:from-yellow-500/20 px-3 py-0.5"
        : "text-slate-500 dark:text-slate-700 hover:text-slate-300 dark:hover:text-slate-900"
    )}
  >
    {item.label}
  </a>
))
