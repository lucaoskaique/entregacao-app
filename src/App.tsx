import { About } from './components/About'
// import { Cta } from './components/Cta'
import { FAQ } from './components/FAQ'
// import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
// import { HowItWorks } from './components/HowItWorks'
import { Navbar } from './components/Navbar'
// import { Newsletter } from './components/Newsletter'
// import { Pricing } from './components/Pricing'
import { ScrollToTop } from './components/ScrollToTop'
// import { Services } from './components/Services'
// import { Sponsors } from './components/Sponsors'
// import { Team } from './components/Team'
// import { Testimonials } from './components/Testimonials'
import './styles/app.css'

function App() {
  return (
    <>
      {/* Templates que serão usados e modificados */}
      <Navbar />
      <Hero />
      <About />
      <FAQ />
      <Footer />
      <ScrollToTop />

      {/* Templates - não serão usados ainda */}
      {/* <Sponsors />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter /> */}
    </>
  );
}

export default App;
