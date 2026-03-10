"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { techDev } from "@/constants/techDev"

export default function InfiniteCarousel() {
  const [hovered, setHovered] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const scrollRef = useRef(null)

  const duplicatedItems = [...techDev, ...techDev, ...techDev]

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
      <div className="absolute left-0 top-0 bottom-0 w-30 z-10 pointer-events-none bg-gradient-to-r from-black via-black/90 to-transparent dark:from-white dark:via-white/90 dark:to-transparent" />

      {/* gradient kanan */}
      <div className="absolute right-0 top-0 bottom-0 w-30 z-10 pointer-events-none bg-gradient-to-l from-black via-black/90 to-transparent dark:from-white dark:via-white/90 dark:to-transparent" />

      <div ref={scrollRef} className="overflow-x-hidden select-none border border-slate-500/30 py-8 lg:py-10">
        <div className="inline-flex gap-4 lg:gap-8 px-20 py-4 lg:py-6 border-2 border-dashed border-zinc-600/40 dark:border-zinc-400/60">

          {duplicatedItems.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={`${item.name}-${index}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="
                  group relative flex flex-col items-center justify-center
                  lg:w-36 lg:h-36 w-22 h-22 rounded-xl
                  transition-all duration-300
                  hover:scale-105 hover:-translate-y-2
                  bg-zinc-950 dark:bg-zinc-50
                  border border-white/10 dark:border-black/10 border-dashed
                  hover:border-white/30 dark:hover:border-black/30 transition-all duration-150 ease-in-out
                "
              >
                <div className={`${item.shadow} border border-zinc-500/50 relative lg:w-16 lg:h-16 w-8 h-8 lg:group-hover:size-12 mb-2 flex items-center justify-center rounded-full transition-all duration-300 ease-linear`}>
                  <Icon
                    className={`lg:w-8 lg:h-8 w-4 h-4 lg:group-hover:size-6
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
                  className="font-pixel
                    text-xs lg:text-sm font-medium
                    text-gray-400
                    group-hover:text-white
                    dark:group-hover:text-black
                    transition-colors
                  "
                >
                  {item.name}
                </span>
                <div
                  className="group"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="
                          flex text-center
                          text-xs font-medium max-w-xs
                          text-gray-400
                          group-hover:text-gray-400
                          dark:group-hover:text-gray-600
                          transition-colors px-2 pt-1
                        "
                      >
                        {item.description}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}
