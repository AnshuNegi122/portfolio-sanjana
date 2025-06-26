import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
// import Experience from "./components/Experience"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      {/* <Experience /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
