import { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import styles from "./BookingPage.module.css";
import type { UpdateTimesAction } from "../../App";

declare const submitAPI: (formData: any) => boolean;

interface BookingPageProps {
    availableTimes: string[];
    dispatch: (action: UpdateTimesAction) => void;
}

function BookingPage({ availableTimes, dispatch }: BookingPageProps) {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [guests, setGuests] = useState("1");
    const [time, setTime] = useState("");
    const [occasion, setOccasion] = useState("");

    useEffect(() => {
        if (date) {
            dispatch({ type: 'UPDATE_TIMES', payload: date });
        }
    }, [date, dispatch]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        
        const success = submitAPI(formData);
        if (success) {
            console.log("Reservation successfully submitted!");
            // TODO: Use React Router to navigate to a confirmed page here
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
                    availableTimes={availableTimes}
                    handleSubmit={handleSubmit} />
            </section>
        </div>
    );
}

export default BookingPage;