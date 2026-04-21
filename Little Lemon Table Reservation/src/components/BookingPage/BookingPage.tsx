import { useState } from "react";
import BookingForm from "./BookingForm";
import styles from "./BookingPage.module.css";

function BookingPage() {
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("1");
    // This will eventually be fetched from an API based on the selected date
    const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    const [time, setTime] = useState("");
    const [occasion, setOccasion] = useState("");

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