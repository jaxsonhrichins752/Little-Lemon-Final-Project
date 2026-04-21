import { useState } from 'react'
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

const fetchTimesForDate = (date: string) => {
    console.log("Fetching times for date:", date);
    // Mock data: Replace this with an actual API call later
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

function App() {
  const [availableTimes, setAvailableTimes] = useState(fetchTimesForDate(new Date().toISOString().slice(0, 10)));

  const dispatch = (action: { type: string; payload: any }) => {
    if (action.type === 'UPDATE_TIMES') {
        const newTimes = fetchTimesForDate(action.payload);
        setAvailableTimes(newTimes);
    }
  };

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
        <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
