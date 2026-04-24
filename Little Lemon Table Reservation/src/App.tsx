import { useReducer } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Specials from './components/Specials/Specials'
import Testimonials from './components/Testimonials/Testimonials'
import About from './components/About/About'
import Reservations from './components/Reservations/Reservations'
import BookingPage from './components/BookingPage/BookingPage'
import ConfirmedBooking from './components/BookingPage/ConfirmedBooking'
import { Routes, Route } from 'react-router-dom'

declare const fetchAPI: (date: Date) => string[];

export type UpdateTimesAction = {
    type: 'UPDATE_TIMES';
    payload: string;
};

const updateTimes = (state: string[], action: UpdateTimesAction) => {
    if (action.type === 'UPDATE_TIMES') {
        // Convert the string date payload into a Date object for the API
        return fetchAPI(new Date(action.payload));
    }
    return state;
};

const initializeTimes = () => {
    return fetchAPI(new Date());
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

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
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
