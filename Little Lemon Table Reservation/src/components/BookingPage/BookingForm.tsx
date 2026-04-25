/**
 * Controlled reservation form: date, time (from parent’s `availableTimes`), party size,
 * optional occasion. Validates on blur and disables submit until required fields are valid.
 * On submit, calls `submitForm` with the current field snapshot.
 */
import { useState } from 'react';
import styles from './BookingForm.module.css';
import contactImage from '../../assets/Mario and Adrian A 1.png';

interface BookingFormProps {
    firstName: string;
    setFirstName: (firstName: string) => void;
    lastName: string;
    setLastName: (lastName: string) => void;
    phone: string;
    setPhone: (phone: string) => void;
    email: string;
    setEmail: (email: string) => void;
    specialRequests: string;
    setSpecialRequests: (specialRequests: string) => void;
    date: string;
    setDate: (date: string) => void;
    time: string;
    setTime: (time: string) => void;
    guests: string;
    setGuests: (guests: string) => void;
    occasion: string;
    setOccasion: (occasion: string) => void;
    availableTimes: string[];
    submitForm: (formData: { firstName: string; lastName: string; phone: string; email: string; specialRequests: string; date: string; time: string; guests: string; occasion: string }) => void;
}

function BookingForm({
    firstName, setFirstName, lastName, setLastName, phone, setPhone, email, setEmail, specialRequests, setSpecialRequests, date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, submitForm
}: BookingFormProps) {
    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        phone: false,
        date: false,
        time: false,
        guests: false,
        occasion: false,
    });

    const handleBlur = (field: string) => {
        setTouched((prevState) => ({ ...prevState, [field]: true }));
    };

    // First/last name, phone, date, and time are required; party size must parse to 1-10.
    const isGuestsValid = guests !== "" && parseInt(guests, 10) >= 1 && parseInt(guests, 10) <= 10;
    const isFormValid = firstName.trim() !== "" && lastName.trim() !== "" && phone.trim() !== "" && date !== "" && time !== "" && isGuestsValid;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isFormValid) {
            submitForm({ firstName, lastName, phone, email, specialRequests, date, time, guests, occasion });
        } else {
            setTouched({ firstName: true, lastName: true, phone: true, date: true, time: true, guests: true, occasion: false });
        }
    };

    return (
        <form className={styles.bookingForm} onSubmit={handleSubmit}>
            <fieldset className={styles.DateandTime}>
                <div className={styles.inlineField}>
                    <label className="section-title" htmlFor="res-date">Choose date</label>
                    <input className={styles.dateSelector} type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} onBlur={() => handleBlur("date")} required />
                    {touched.date && !date && <p className={styles.errorMessage}>Please choose a valid date.</p>}
                </div>

                <div className={styles.inlineField}>
                    <label className="section-title" htmlFor="res-time">Choose time</label>
                    <select className={styles.timeSelector} id="res-time" value={time} onChange={(e) => setTime(e.target.value)} onBlur={() => handleBlur("time")} required >
                        <option value="" disabled>Select a time</option>
                        {availableTimes.map((timeSlot) => (
                            <option key={timeSlot} value={timeSlot}>{timeSlot}</option>
                        ))}
                    </select>
                    {touched.time && !time && <p className={styles.errorMessage}>Please select a time.</p>}
                </div>
            </fieldset>
            <div className={styles.detailsRow}>
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
                    <option value="">None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    <option>Business Meeting</option>
                    <option>Other</option>
                    </select>
                </fieldset>
            </div>
            <div className={styles.contactRow}>
                <fieldset className={styles.ContactInfo}>
                    <h3 className="section-title">Contact info</h3>
                    <label className="section-title" htmlFor="res-first-name">First name</label>
                    <input className={styles.nameSelector} type="text" id="res-first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} onBlur={() => handleBlur("firstName")} required />
                    {touched.firstName && !firstName.trim() && <p className={styles.errorMessage}>Please enter your first name.</p>}

                    <label className="section-title" htmlFor="res-last-name">Last name</label>
                    <input className={styles.nameSelector} type="text" id="res-last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} onBlur={() => handleBlur("lastName")} required />
                    {touched.lastName && !lastName.trim() && <p className={styles.errorMessage}>Please enter your last name.</p>}

                    <label className="section-title" htmlFor="res-phone">Phone number</label>
                    <input className={styles.phoneSelector} type="tel" id="res-phone" value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={() => handleBlur("phone")} required />
                    {touched.phone && !phone.trim() && <p className={styles.errorMessage}>Please enter your phone number.</p>}

                    <label className="section-title" htmlFor="res-email">Email (optional)</label>
                    <input className={styles.emailSelector} type="email" id="res-email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                <img src={contactImage} alt="Mario and Adrian in the restaurant kitchen" className={styles.contactImage} />
            </div>
            <fieldset className={styles.SpecialRequests}>
                <label className="section-title" htmlFor="special-requests">Special requests (optional)</label>
                <textarea
                    className={styles.specialRequestsSelector}
                    id="special-requests"
                    rows={3}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Allergies, seating preference, celebration details, etc."
                />
            </fieldset>
            <div className={styles.SubmitButtonSection}>
                <button className={`${styles.submitButton} section-title pure-black button button-primary`} type="submit" disabled={!isFormValid}>Make Your reservation</button>
            </div>
        </form>
    );
};

export default BookingForm;