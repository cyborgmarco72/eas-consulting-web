import Hero from "../components/Hero/Hero"
import Metrics from "../components/Metrics/Metrics"
import ServicesGrid from "../components/Services/ServicesGrid"
import Partners from "../components/Partners/Partners"
import Clients from "../components/Clients/Clients"
import SuccessStories from "../components/SuccessStories/SuccessStories"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Layout/Footer"

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <ServicesGrid />
      {/* <Partners /> */}
      <Clients />
      <SuccessStories />
      <Contact />
    </>
  )
}