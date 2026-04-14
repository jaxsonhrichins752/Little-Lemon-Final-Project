import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Specials from './components/Specials/Specials'
import Testimonials from './components/Testimonials/Testimonials'
import About from './components/About/About'

function App() {

  return (
    <>
    <Header />
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
    <Footer />
    </>
  )
}

export default App
