import React, { useEffect, useRef, useState } from "react"

const SkillBar = ({ name, nameSingkat, level, color }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [displayLevel, setDisplayLevel] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return

    let current = 0
    const duration = 800
    const stepTime = 16
    const increment = level / (duration / stepTime)

    const timer = setInterval(() => {
      current += increment
      if (current >= level) {
        current = level
        clearInterval(timer)
      }
      setDisplayLevel(Math.round(current))
    }, stepTime)

    return () => clearInterval(timer)
  }, [visible, level])

  return (
    <div ref={ref} className="glass-effect rounded-2xl p-6 outline outline-offset-4 outline-slate-500/15">
      <div className="flex justify-between items-center mb-4">
        <h3 className="md:hidden font-pixel text-base font-semibold text-white dark:text-slate-500">
          {nameSingkat ?? name}
        </h3>
        <h3 className="hidden md:inline font-pixel text-base font-semibold text-white dark:text-slate-500">
          {name}
        </h3>
        <span className="text-sm font-medium text-slate-400">
          {displayLevel}%
        </span>
      </div>

      <div className="w-full bg-slate-800 dark:bg-slate-300 rounded-xs h-[3px] overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-[width] duration-700 ease-out`}
          style={{ width: visible ? `${displayLevel}%` : "0%" }}
        />
      </div>
    </div>
  )
}

export default React.memo(SkillBar)
