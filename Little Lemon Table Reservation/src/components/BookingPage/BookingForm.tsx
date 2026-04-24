import styles from './BookingForm.module.css';

interface BookingFormProps {
    date: string;
    setDate: (date: string) => void;
    time: string;
    setTime: (time: string) => void;
    guests: string;
    setGuests: (guests: string) => void;
    occasion: string;
    setOccasion: (occasion: string) => void;
    availableTimes: string[];
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function BookingForm({
    date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, handleSubmit
}: BookingFormProps) {
    return (
        <form className={styles.bookingForm} onSubmit={handleSubmit}>
            <fieldset className={styles.DateandTime}>
                <label className="section-title" htmlFor="res-date">Choose date</label>
                <input className={styles.dateSelector} type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
                <label className="section-title" htmlFor="res-time">Choose time</label>
                <select className={styles.timeSelector} id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required >
                    <option value="" disabled>Select a time</option>
                    {availableTimes.map((timeSlot) => (
                        <option key={timeSlot} value={timeSlot}>{timeSlot}</option>
                    ))}
                </select>
            </fieldset>
            <fieldset className={styles.PartySize}>
                <label className="section-title" htmlFor="guests">Number of guests</label>
                <input className={styles.guestsSelector} type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}></input>
            </fieldset>
            <fieldset className={styles.Occasion}>
                <label className="section-title" htmlFor="occasion">Occasion</label>
                <select className={styles.occasionSelector} id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required >
                    <option value="" disabled>Select occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </fieldset>
            <div className={styles.SubmitButtonSection}>
                <button className={`${styles.submitButton} section-title pure-black button button-primary`} type="submit">Make Your reservation</button>
            </div>
        </form>
    );
};

export default BookingForm;