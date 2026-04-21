import { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import styles from "./BookingPage.module.css";
import { UpdateTimesAction } from "../../App";

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
            // TODO: Replace this mock with your actual API call.
            // Example: fetchAPI(date).then(times => dispatch({ type: 'UPDATE_TIMES', payload: times }))
            
            const fetchTimesAsync = async () => {
                console.log("Fetching times for date:", date);
                // Simulating an API response
                const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
                dispatch({ type: 'UPDATE_TIMES', payload: mockTimes });
            };
            
            fetchTimesAsync();
        }
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