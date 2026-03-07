"use client"

import MyAzure from "@/components/svg/MyAzure"
import MyAWS from "@/components/svg/MyAWS"
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
  { name: "Jest", icon: SiJest, color: "text-red-500", shadow: "group-hover:inset-shadow-[0_35px_35px_#ef4444]/15 group-hover:border-red-500/50" },
  { name: "GitHub", icon: SiGithub, color: "text-white dark:text-zinc-800", shadow: "group-hover:inset-shadow-[0_35px_35px_#ffffff]/15 dark:group-hover:inset-shadow-[0_35px_35px_#000000]/15 group-hover:border-white/50 dark:group-hover:border-zinc-500/50" },
  { name: "Vercel", icon: SiVercel, color: "text-white dark:text-zinc-800", shadow: "group-hover:inset-shadow-[0_35px_35px_#ffffff]/15 dark:group-hover:inset-shadow-[0_35px_35px_#000000]/15 group-hover:border-white/50 dark:group-hover:border-zinc-500/50" },
  { name: "Netlify", icon: SiNetlify, color: "text-teal-500", shadow: "group-hover:inset-shadow-[0_35px_35px_#14b8a6]/15 group-hover:border-teal-500/50" },
  { name: "Git", icon: SiGit, color: "text-orange-500", shadow: "group-hover:inset-shadow-[0_35px_35px_#f97316]/15 group-hover:border-orange-500/50" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-400", shadow: "group-hover:inset-shadow-[0_35px_35px_#eab308]/15 group-hover:border-yellow-500/50" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500", shadow: "group-hover:inset-shadow-[0_35px_35px_#10b981]/15 group-hover:border-emerald-500/50" },
  { name: "Azure", icon: MyAzure, color: "text-blue-500", shadow: "group-hover:inset-shadow-[0_35px_35px_#3b82f6]/15 group-hover:border-blue-500/50" },
  { name: "AWS", icon: MyAWS, color: "text-orange-500", shadow: "group-hover:inset-shadow-[0_35px_35px_#f97316]/15 group-hover:border-orange-500/50" },
]

export default function InfiniteCarousel() {
  const scrollRef = useRef(null)

  const duplicatedItems = [...techItems, ...techItems, ...techItems]

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    let animationFrame
    let scrollPosition = 0
    const speed = 1

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
        <div className="inline-flex gap-8 px-20 py-6 border-2 border-dashed border-zinc-600/40 dark:border-zinc-400/60">

          {duplicatedItems.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={`${item.name}-${index}`}
                className="
                  group relative flex flex-col items-center justify-center
                  lg:w-32 lg:h-32 w-16 h-16 rounded-xl
                  transition-all duration-300
                  hover:scale-105
                  bg-zinc-950 dark:bg-zinc-50
                  border border-white/10 dark:border-black/10 border-dashed
                  hover:border-white/30 dark:hover:border-black/30
                "
              >
                <div className={`${item.shadow} border border-zinc-500/50 relative lg:w-16 lg:h-16 w-6 h-6 mb-2 flex items-center justify-center rounded-full transition-all duration-300 ease-linear`}>

                  <Icon
                    className={`lg:w-10 lg:h-10 w-5 h-5
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
                    text-xs lg:text-sm font-medium
                    text-gray-500
                    group-hover:text-white
                    dark:group-hover:text-black
                    transition-colors
                  "
                >
                  {item.name}
                </span>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}
