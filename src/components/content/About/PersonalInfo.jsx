import { memo } from "react"

const InfoRow = memo(function InfoRow({ icon: Icon, value, color, colorHover }) {
  return (
    <div className="group flex items-center space-x-3">
      <div className={`p-2 rounded-full ${color} transition-colors`}>
        <Icon className={`w-6 h-6 ${colorHover} transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`} />
      </div>
      <p className="font-pixel text-slate-300 dark:text-slate-500 text-sm md:text-base">
        {value}
      </p>
    </div>
  )
})

export default InfoRow


