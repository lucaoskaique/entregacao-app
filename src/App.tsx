import { About } from './components/ui/about'
import { FAQ } from './components/ui/faq'
import { Footer } from './components/ui/footer'
import { Hero } from './components/ui/hero'
import { Navbar } from './components/ui/navbar'
import { ScrollToTop } from './components/ScrollToTop'
import './styles/app.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
