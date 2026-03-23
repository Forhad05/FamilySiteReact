import Hero from '../components/Hero/Hero.jsx'
import Contact from '../components/Contact/Contact.jsx'
import SectionGroup from '../components/SectionGroup/SectionGroup.jsx'
import Multicolumn from '../components/Multicolumn/Multicolumn.jsx'
import CallToAction from '../components/CallToAction/CallToAction.jsx'
import FAQ from '../components/FAQ/FAQ.jsx'

function Home() {
  return (
    <>
      <Hero />
      <Contact />
      <SectionGroup />
      <Multicolumn />
      <CallToAction />
      <FAQ />
    </>
  );
}

export default Home;