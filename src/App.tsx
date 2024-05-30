import { About } from "./components/ui/about/about";
import { FAQ } from "./components/ui/faq/faq";
import { Footer } from "./components/ui/footer/footer";
import { Hero } from "./components/ui/hero/hero-section";
import { Navbar } from "./components/ui/header/navbar";
import { ScrollToTop } from "./components/ui/scroll-to-top";
import "./styles/app.css";

function App() {
  return (
    <>
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
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
