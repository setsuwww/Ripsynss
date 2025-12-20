import React from "react"

const SkillBar = ({ name, nameSingkat, level, color }) => {
  return (
    <div className="glass-effect rounded-2xl p-6 outline outline-offset-4 outline-slate-500/15">
      <div className="flex justify-between items-center mb-4">
        <h3 className="md:hidden font-pixel text-base font-semibold text-white dark:text-slate-600">{nameSingkat ?? name}</h3>
        <h3 className="hidden md:inline font-pixel text-base font-semibold text-white dark:text-slate-500">{name}</h3>
        <span className="text-sm font-medium text-slate-400 dark:text-slate-400">{level}%</span>
      </div>

      <div className="w-full dark:bg-slate-400 bg-slate-800 rounded-xs h-[3px] overflow-hidden">
        <div className={`h-full bg-gradient-to-r ${color} rounded-full`} style={{ width: `${level}%`}}/>
      </div>
    </div>
  )
}

export default React.memo(SkillBar)
