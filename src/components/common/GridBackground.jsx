import React from "react"
import clsx from "clsx"

const GridBackground = () => {
  return (
    <div
      aria-hidden="true"
      data-aos="zoom-in"
      className={clsx(
        "absolute inset-0 animate-grid pointer-events-none",

        // base grid (dark / default) 
        "bg-[linear-gradient(rgba(255,255,255,0.06)_0.5px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_0.5px,transparent_1px)]",

        // grid size
        "bg-[size:50px_50px]",

        // light mode (dark:)
        "dark:bg-[linear-gradient(rgba(0,0,0,0.08)_0.5px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_0.5px,transparent_1px)]"
      )}
    />
  )
}

export default React.memo(GridBackground)
