"use client"

import React, { useEffect, useRef, useState } from "react"

const techItems = [
  {
    name: "Jest",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    color: "#C21325",
  },
  {
    name: "Vercel",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    color: "#ffffff",
  },
  {
    name: "Netlify",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    color: "#00C7B7",
  },
  {
    name: "GitHub",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "#a79f9f",
  },
  {
    name: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
  },
  {
    name: "Azure",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    color: "#0078D4",
  },
  {
    name: "AWS",
    image: "https://www.svgrepo.com/svg/376356/aws",
    color: "#FF9900",
  },
  {
    name: "Neon",
    image: "https://neon.tech/favicon.svg",
    color: "#00E699",
  },
  {
    name: "Firebase",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    color: "#FFCA28",
  },
  {
    name: "Supabase",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    color: "#3ECF8E",
  },
]

export default function InfiniteCarousel() {
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef(null)

  const duplicatedItems = [...techItems, ...techItems, ...techItems]

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    let animationFrame
    let scrollPosition = 0
    const speed = 0.5

    const scroll = () => {
      if (!scrollElement || isHovered) return

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

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isHovered])

  return (
    <div className="w-full relative py-20 bg-black dark:bg-white overflow-hidden">
      {/* Gradient Overlay Kiri - Menyesuaikan dengan background */}
      <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none bg-gradient-to-r from-black via-black/90 to-transparent dark:from-white dark:via-white/90 dark:to-transparent" />

      {/* Gradient Overlay Kanan - Menyesuaikan dengan background */}
      <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none bg-gradient-to-l from-black via-black/90 to-transparent dark:from-white dark:via-white/90 dark:to-transparent" />

      {/* Container Scroll */}
      <div
        ref={scrollRef}
        className="overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="inline-flex gap-8 px-20 py-6">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className={`
                group relative flex flex-col items-center justify-center
                w-32 h-32 rounded-xl transition-all duration-300
                hover:scale-105
                bg-white/5 dark:bg-black/5
                border border-white/10 dark:border-black/10
                hover:border-white/30 dark:hover:border-black/30
              `}
            >
              {/* Image Container */}
              <div className="relative w-16 h-16 mb-2 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`
                    w-12 h-12 object-contain transition-all duration-300
                    ${!isHovered ? 'grayscale opacity-40' : ''}
                    group-hover:!grayscale-0 group-hover:!opacity-100
                    group-hover:scale-110
                  `}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target
                    target.src = `https://placehold.co/48x48/${item.color.replace('#', '')}/ffffff?text=${item.name.charAt(0)}`
                  }}
                />
              </div>

              {/* Nama */}
              <span
                className="text-xs font-medium transition-all duration-300"
                style={{
                  color: !isHovered ? '#6B7280' : item.color,
                }}
              >
                {item.name}
              </span>

              {/* Hover Effect - Simple colored dot indicator */}
              <div
                className="absolute -top-1 -right-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundColor: item.color,
                  boxShadow: `0 0 5px ${item.color}`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Info - Clean version */}
      <div className="flex justify-center mt-8 gap-4 text-xs">
        <div className="px-3 py-1.5 rounded-full bg-white/10 dark:bg-black/10 text-gray-400 dark:text-gray-600 flex items-center gap-2 border border-white/10 dark:border-black/10">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-pulse" />
          <span>Hover untuk warna asli</span>
        </div>
        <div className="px-3 py-1.5 rounded-full bg-white/10 dark:bg-black/10 text-gray-400 dark:text-gray-600 flex items-center gap-2 border border-white/10 dark:border-black/10">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-pulse" />
          <span>Infinite scroll</span>
        </div>
      </div>
    </div>
  )
}
