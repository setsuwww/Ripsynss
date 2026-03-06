import React, { useMemo } from "react"
import {
  Code2,
  Database,
} from "lucide-react"
import { frameworks, databases } from "../../../constants/frameworks"

const FrameworkGrid = () => {
  const renderedFrameworks = useMemo(
    () => frameworks.map(({ Icon, title, color, bg, border, outline, description }) => (
          <div
            data-aos="zoom-in"
            key={title}
            className={`group glass-effect relative rounded-2xl p-6 flex flex-col items-start hover:scale-[1.02] transition-all duration-300 hover:bg-slate-500/10 border-b-0 border-l-2 hover:border-l-[3px] ${border} outline outline-offset-4 outline-slate-500/15 ${outline}`}
          >
            <div className={`w-12 h-12 mb-4 rounded-full ${bg} flex items-center justify-center`}>
              <Icon className={`group-hover:stroke-[0.1px] w-8 h-8 ${color}`} />
            </div>
            <h4 className={`font-pixel text-lg font-semibold mb-2 ${color}`}>{title}</h4>
            <p className="text-slate-400 dark:text-slate-600 text-sm leading-relaxed">{description}</p>
          </div>
        )
      ),
    [frameworks]
  )

  const renderedDatabases = useMemo(
    () => databases.map(({ Icon, title, color, bg, border, outline, description }) => (
          <div
            data-aos="zoom-in"
            key={title}
            className={`group glass-effect relative rounded-2xl p-6 flex flex-col items-start hover:scale-[1.02] transition-all duration-300 hover:bg-slate-500/10 border-b-0 border-l-2 hover:border-l-[3px] ${border} outline outline-offset-4 outline-slate-500/15 ${outline}`}
          >
            <div className={`w-12 h-12 mb-4 rounded-full ${bg} flex items-center justify-center`}>
              <Icon className={`group-hover:stroke-[0.1px] w-8 h-8 ${color}`} />
            </div>
            <h4 className={`font-pixel text-lg font-semibold mb-2 ${color}`}>{title}</h4>
            <p className="text-slate-400 dark:text-slate-600 text-sm leading-relaxed">{description}</p>
          </div>
        )
      ),
    [databases]
  )

  return (
    <div className="space-y-10">
      <section>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderedFrameworks}
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderedDatabases}
        </div>
      </section>
    </div>
  )
}

export default React.memo(FrameworkGrid)
