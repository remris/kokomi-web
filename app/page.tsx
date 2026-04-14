import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
// import Screenshots from '@/components/Screenshots'
import Community from '@/components/Community'
import NutritionSection from '@/components/NutritionSection'
import SustainabilityHighlightSection from '@/components/SustainabilityHighlightSection'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main id="main-content" className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      {/* <Screenshots /> */}
      <Community />
      <NutritionSection />
      <SustainabilityHighlightSection />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Download />
      <Footer />
    </main>
  )
}
