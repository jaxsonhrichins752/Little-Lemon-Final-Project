import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import styles from "./BookingPage.module.css";
import type { UpdateTimesAction } from "../../App";

interface ReservationData {
    date: string;
    time: string;
    guests: string;
    occasion: string;
}
declare const submitAPI: (formData: ReservationData) => boolean;

interface BookingPageProps {
    availableTimes: string[];
    dispatch: (action: UpdateTimesAction) => void;
}

function BookingPage({ availableTimes, dispatch }: BookingPageProps) {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [guests, setGuests] = useState("1");
    const [time, setTime] = useState("");
    const [occasion, setOccasion] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (date) {
            dispatch({ type: 'UPDATE_TIMES', payload: date });
        }
    }, [date, dispatch]);

    // Derive the truly available times by double-checking local storage right here during render.
    // This guarantees the dropdown updates instantly, bypassing any reducer delays or back-button caching!
    const existingBookings = JSON.parse(localStorage.getItem("Bookings") || "[]");
    const bookedTimes = existingBookings
        .filter((booking: ReservationData) => booking.date === date)
        .map((booking: ReservationData) => booking.time);
        
    const trulyAvailableTimes = availableTimes.filter(time => !bookedTimes.includes(time));

    // Ensure the selected time is reset if it is no longer available (e.g., from hitting the back button)
    useEffect(() => {
        if (time && !trulyAvailableTimes.includes(time)) {
            setTime("");
        }
    }, [trulyAvailableTimes, time]);

    const submitForm = (formData: ReservationData) => {
            // Retrieve existing bookings or initialize an empty array
            const existingBookings = JSON.parse(localStorage.getItem("Bookings") || "[]");

            // Double-check if the time was already booked (handles multiple tabs or stale data)
            const isAlreadyBooked = existingBookings.some(
                (booking: ReservationData) => booking.date === formData.date && booking.time === formData.time
            );
            
            if (isAlreadyBooked) {
                alert("Sorry, this time slot has just been booked! Please select a different time.");
                dispatch({ type: 'UPDATE_TIMES', payload: formData.date });
                return;
            }
            
            const success = submitAPI(formData);
            if (success) {
            existingBookings.push(formData);
            localStorage.setItem("Bookings", JSON.stringify(existingBookings));
            
            // Instantly update the reducer state so the booked time is removed
            dispatch({ type: 'UPDATE_TIMES', payload: formData.date });
            
            console.log("Reservation successfully submitted!");
            navigate("/confirmed");
        } else {
            console.error("Failed to submit reservation.");
        }
    };

    return (
         <div className={styles.BookingPage}>
            <section className={styles.banner}>
                <h1 className='display-title primary-yellow'>Reservations</h1>
            </section>
            <section className={styles.BookingFormSection}>
                <BookingForm
                    date={date} setDate={setDate}
                    time={time} setTime={setTime}
                    guests={guests} setGuests={setGuests}
                    occasion={occasion} setOccasion={setOccasion}
                    availableTimes={trulyAvailableTimes}
                    submitForm={submitForm} />
            </section>
        </div>
    );
}

export default BookingPage;