import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Specials from './components/Specials/Specials'
import Testimonials from './components/Testimonials/Testimonials'
import About from './components/About/About'
import Reservations from './components/Reservations/Reservations'
import BookingPage from './components/BookingPage/BookingPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={
            <>
              <Hero />
              <Specials />
              <Testimonials />
              <About />
            </>
          } />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
