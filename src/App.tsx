import './styles/app.css'
import { ThemeProvider } from './components/theme-provider/theme-provider'
import { Header } from './components/header/header'
import { Hero } from './components/hero/hero-section'
import { About } from './components/about/about'
import { FAQ } from './components/faq/faq'
import { Footer } from './components/footer/footer'
import { ScrollToTop } from './components/ui/scroll-to-top'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Header />
      <Hero />
      <About />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
