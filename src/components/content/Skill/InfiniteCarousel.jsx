"use client"

import React, { useEffect, useRef } from "react"

import {
  SiJest,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiGit,
  SiFirebase,
  SiSupabase
} from "react-icons/si"

const techItems = [
  { name: "Jest", icon: SiJest, color: "text-red-500" },
  { name: "GitHub", icon: SiGithub, color: "text-white dark:text-zinc-800" },
  { name: "Vercel", icon: SiVercel, color: "text-white dark:text-zinc-800" },
  { name: "Netlify", icon: SiNetlify, color: "text-teal-500" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
]

export default function InfiniteCarousel() {
  const scrollRef = useRef(null)

  const duplicatedItems = [...techItems, ...techItems, ...techItems]

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    let animationFrame
    let scrollPosition = 0
    const speed = 0.5

    const scroll = () => {
      scrollPosition += speed

      if (scrollPosition >= scrollElement.scrollWidth / 2) {
        scrollPosition = 0
        scrollElement.scrollLeft = 0
      } else {
        scrollElement.scrollLeft = scrollPosition
      }

      animationFrame = requestAnimationFrame(scroll)
    }

    animationFrame = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <div className="w-full relative py-20 bg-black dark:bg-white overflow-hidden">

      {/* gradient kiri */}
      <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none bg-gradient-to-r from-black via-black/90 to-transparent dark:from-white dark:via-white/90 dark:to-transparent" />

      {/* gradient kanan */}
      <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none bg-gradient-to-l from-black via-black/90 to-transparent dark:from-white dark:via-white/90 dark:to-transparent" />

      <div
        ref={scrollRef}
        className="overflow-x-hidden select-none"
      >
        <div className="inline-flex gap-8 px-20 py-6 border-2 border-dashed border-slate-600/40 dark:border-slate-400/60">

          {duplicatedItems.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={`${item.name}-${index}`}
                className="
                  group relative flex flex-col items-center justify-center
                  w-32 h-32 rounded-xl
                  transition-all duration-300
                  hover:scale-105
                  bg-zinc-950 dark:bg-zinc-50
                  border border-white/10 dark:border-black/10 border-dashed
                  hover:border-white/30 dark:hover:border-black/30
                "
              >
                <div className="relative w-16 h-16 mb-2 flex items-center justify-center">

                  <Icon
                    size={40}
                    className={`
                      transition-all duration-300
                      grayscale opacity-40
                      group-hover:grayscale-0
                      group-hover:opacity-100
                      group-hover:scale-110
                      ${item.color}
                    `}
                  />

                </div>

                <span
                  className="
                    text-xs font-medium
                    text-gray-500
                    group-hover:text-white
                    dark:group-hover:text-black
                    transition-colors
                  "
                >
                  {item.name}
                </span>

                <div
                  className="
                    absolute -top-1 -right-1
                    w-2 h-2 rounded-full
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    bg-current
                  "
                />

              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}
