import { MyAWS, MyAzure } from "@/components/svg/MyIcon"
import { SiJest, SiVercel, SiNetlify, SiGithub, SiGit, SiFirebase, SiSupabase } from "react-icons/si"

export const techDev = [
  {
    name: "Jest",
    description: "JavaScript testing framework for unit and integration tests.",
    icon: SiJest,
    color: "text-red-500",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#ef4444]/15 group-hover:border-red-500/50"
  },
  {
    name: "GitHub",
    description: "Platform for version control, collaboration, and code hosting.",
    icon: SiGithub,
    color: "text-white dark:text-zinc-800",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#ffffff]/15 dark:group-hover:inset-shadow-[0_35px_35px_#000000]/15 group-hover:border-white/50 dark:group-hover:border-zinc-500/50"
  },
  {
    name: "Vercel",
    description: "Cloud platform for deploying and hosting modern web apps.",
    icon: SiVercel,
    color: "text-white dark:text-zinc-800",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#ffffff]/15 dark:group-hover:inset-shadow-[0_35px_35px_#000000]/15 group-hover:border-white/50 dark:group-hover:border-zinc-500/50"
  },
  {
    name: "Netlify",
    description: "Platform for building, deploying, and hosting static sites.",
    icon: SiNetlify,
    color: "text-teal-500",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#14b8a6]/15 group-hover:border-teal-500/50"
  },
  {
    name: "Git",
    description: "Distributed version control system for tracking code changes.",
    icon: SiGit,
    color: "text-orange-500",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#f97316]/15 group-hover:border-orange-500/50"
  },
  {
    name: "Firebase",
    description: "Google backend platform for authentication, database, and hosting.",
    icon: SiFirebase,
    color: "text-yellow-400",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#eab308]/15 group-hover:border-yellow-500/50"
  },
  {
    name: "Supabase",
    description: "Open-source backend platform built on PostgreSQL.",
    icon: SiSupabase,
    color: "text-emerald-500",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#10b981]/15 group-hover:border-emerald-500/50"
  },
  {
    name: "Azure",
    description: "Microsoft cloud platform for hosting and infrastructure services.",
    icon: MyAzure,
    color: "text-blue-500",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#3b82f6]/15 group-hover:border-blue-500/50"
  },
  {
    name: "AWS",
    description: "Amazon cloud platform providing scalable infrastructure and services.",
    icon: MyAWS,
    color: "text-orange-500",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#f97316]/15 group-hover:border-orange-500/50"
  }
]
