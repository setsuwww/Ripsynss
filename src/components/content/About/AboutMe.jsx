import { memo } from "react"
import TitleForm from "../../common/FormTitle"
import { aboutParagraphs } from "../../../constants/aboutParagraphs"

function AboutSectionComponent() {
  return (
    <section className="glass-effect rounded-2xl p-6 md:p-8" data-aos="fade-left">
      <TitleForm title="Did U Know me?" />

      <article className="text-slate-400 space-y-4 leading-[80px] md:leading-[26px]">
        {aboutParagraphs.map((text, i) => (
          <p key={i} className="text-slate-400 dark:text-slate-600 text-sm md:text-base tracking-wide md:tracking-wide">
            {text}
          </p>
        ))}
      </article>
    </section>
  )
}

const AboutSection = memo(AboutSectionComponent)
export default AboutSection
