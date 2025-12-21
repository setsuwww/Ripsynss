import BallsBackground from "../components/common/SoftGradients"
import TypingEffect from "../components/content/Hero/ProfessionTyping"
import GridBackground from "../components/common/GridBackground"
import TitleSection from "../components/common/PageTitle"
import WelcomeBadge from "../components/content/Hero/WelcomeBadge"
import { Meteors } from "../components/magicui/meteors"
import ActionButtons from "../components/content/Hero/ActionButton"
import SEOHeader from "../components/SEO/SEOHeader"

const description = "I create modern web applications, SEO friendly, semantic code, and responsive designs using contemporary technology. Perfectionist about clean Reusable, Scalable, Maintainable code, beautiful Art UI design, and awesome UX Friendly with smooth interaction."

const HomePage = () => {
  return (
    <>
      <SEOHeader title="Ripsynss" description={description} url="https://ripsynss.vercel.app" image="/pp.webp"/>

      <section className="w-full relative min-h-screen overflow-hidden">
        <Meteors number={10} />
        <BallsBackground />
        <GridBackground />

        <main className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center max-w-md md:max-w-5xl mx-auto">
            <WelcomeBadge />

            <header>
              <TitleSection text="Hi I'm" highlight="Rifqi Synyster" isHeading={true} />
              <TypingEffect />
            </header>

            <section aria-label="Description" className="mt-2 md:mt-6">
              <p className="text-slate-400 dark:text-slate-500 mb-12 max-w-xs md:max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            </section>

            <nav aria-label="Call to action buttons">
              <ActionButtons />
            </nav>
          </div>
        </main>
      </section>
    </>
  )
}

export default HomePage
