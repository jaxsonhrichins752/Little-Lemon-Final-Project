import { useState } from 'react';
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
    submitForm: (formData: { date: string; time: string; guests: string; occasion: string }) => void;
}

function BookingForm({
    date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, submitForm
}: BookingFormProps) {
    const [touched, setTouched] = useState({
        date: false,
        time: false,
        guests: false,
        occasion: false,
    });

    const handleBlur = (field: string) => {
        setTouched((prevState) => ({ ...prevState, [field]: true }));
    };

    const isGuestsValid = guests !== "" && parseInt(guests, 10) >= 1 && parseInt(guests, 10) <= 10;
    const isFormValid = date !== "" && time !== "" && isGuestsValid;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isFormValid) {
            submitForm({ date, time, guests, occasion });
        } else {
            setTouched({ date: true, time: true, guests: true, occasion: false });
        }
    };

    return (
        <form className={styles.bookingForm} onSubmit={handleSubmit}>
            <fieldset className={styles.DateandTime}>
                <label className="section-title" htmlFor="res-date">Choose date</label>
                <input className={styles.dateSelector} type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} onBlur={() => handleBlur("date")} required />
                {touched.date && !date && <p className={styles.errorMessage}>Please choose a valid date.</p>}

                <label className="section-title" htmlFor="res-time">Choose time</label>
                <select className={styles.timeSelector} id="res-time" value={time} onChange={(e) => setTime(e.target.value)} onBlur={() => handleBlur("time")} required >
                    <option value="" disabled>Select a time</option>
                    {availableTimes.map((timeSlot) => (
                        <option key={timeSlot} value={timeSlot}>{timeSlot}</option>
                    ))}
                </select>
                {touched.time && !time && <p className={styles.errorMessage}>Please select a time.</p>}
            </fieldset>
            <div className={styles.guestWrapper}>
                <fieldset className={styles.PartySize}>
                    <label className="section-title" htmlFor="guests">Number of guests</label>
                    <input className={styles.guestsSelector} type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} onBlur={() => handleBlur("guests")} required />
                    {touched.guests && !isGuestsValid && <p className={styles.errorMessage}>Please enter a number of guests between 1 and 10.</p>}
                </fieldset>
                <p className={styles.helperText}>*For parties larger than 10, please call us at (555) 123-4567.</p>
            </div>
            <fieldset className={styles.Occasion}>
                <label className="section-title" htmlFor="occasion">Occasion</label>
                <select className={styles.occasionSelector} id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} onBlur={() => handleBlur("occasion")}>
                    <option value="">None (Optional)</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </fieldset>
            <div className={styles.SubmitButtonSection}>
                <button className={`${styles.submitButton} section-title pure-black button button-primary`} type="submit" disabled={!isFormValid} aria-label="On Click">Make Your reservation</button>
            </div>
        </form>
    );
};

export default BookingForm;