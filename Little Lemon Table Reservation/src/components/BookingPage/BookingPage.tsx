import { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import styles from "./BookingPage.module.css";

interface BookingPageProps {
    availableTimes: string[];
    dispatch: (action: { type: string; payload: any }) => void;
}

function BookingPage({ availableTimes, dispatch }: BookingPageProps) {
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("1");
    const [time, setTime] = useState("");
    const [occasion, setOccasion] = useState("");

    useEffect(() => {
        // When the date changes, dispatch an action to update the available times.
        dispatch({ type: 'UPDATE_TIMES', payload: date });
    }, [date, dispatch]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted from BookingPage with:", { date, time, guests, occasion });
        // Here you would typically call an API to submit the data
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
                    availableTimes={availableTimes}
                    handleSubmit={handleSubmit} />
            </section>
        </div>
    );
}

export default BookingPage;