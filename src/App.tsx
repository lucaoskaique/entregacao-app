import { About } from './components/About'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
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
