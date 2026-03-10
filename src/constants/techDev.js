import { MyAWS, MyAzure } from "@/components/svg/MyIcon"
import { SiJest, SiVercel, SiNetlify, SiGithub, SiGit, SiFirebase, SiSupabase } from "react-icons/si"

export const techDev = [
  {
    name: "Jest",
    description: "Javascript testing framework unit",
    icon: SiJest,
    color: "text-red-500",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#ef4444]/15 group-hover:border-red-500/50"
  },
  {
    name: "GitHub",
    description: "Platform for collaboration.",
    icon: SiGithub,
    color: "text-white dark:text-zinc-800",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#ffffff]/15 dark:group-hover:inset-shadow-[0_35px_35px_#000000]/15 group-hover:border-white/50 dark:group-hover:border-zinc-500/50"
  },
  {
    name: "Vercel",
    description: "Cloud platform for deploying web apps.",
    icon: SiVercel,
    color: "text-white dark:text-zinc-800",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#ffffff]/15 dark:group-hover:inset-shadow-[0_35px_35px_#000000]/15 group-hover:border-white/50 dark:group-hover:border-zinc-500/50"
  },
  {
    name: "Netlify",
    description: "Platform for deploying static sites.",
    icon: SiNetlify,
    color: "text-teal-500",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#14b8a6]/15 group-hover:border-teal-500/50"
  },
  {
    name: "Git",
    description: "Distributed version control system.",
    icon: SiGit,
    color: "text-orange-500",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#f97316]/15 group-hover:border-orange-500/50"
  },
  {
    name: "Firebase",
    description: "Google backend platform",
    icon: SiFirebase,
    color: "text-yellow-400",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#eab308]/15 group-hover:border-yellow-500/50"
  },
  {
    name: "Supabase",
    description: "PostgreSQL BaaS platform",
    icon: SiSupabase,
    color: "text-emerald-500",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#10b981]/15 group-hover:border-emerald-500/50"
  },
  {
    name: "Azure",
    description: "Microsoft cloud Infrastructure,",
    icon: MyAzure,
    color: "text-blue-500",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#3b82f6]/15 group-hover:border-blue-500/50"
  },
  {
    name: "AWS",
    description: "Amazon cloud Infrastructure.",
    icon: MyAWS,
    color: "text-orange-500",
    shadow: "group-hover:inset-shadow-[0_35px_35px_#f97316]/15 group-hover:border-orange-500/50"
  }
]
