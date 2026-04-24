/**
 * Success screen after a reservation is submitted (`/confirmed`): static confirmation copy.
 */
import styles from './ConfirmedBooking.module.css';

function ConfirmedBooking() {
    return (
        <section className={styles.container}>
            <h1 className="display-title primary-yellow">Booking Confirmed!</h1>
            <p className="lead-text color-dark">
                Thank you for choosing Little Lemon. Your table reservation has been successfully confirmed.
            </p>
            <p className="regular-paragraph color-dark">
                We look forward to serving you!
            </p>
        </section>
    );
}

export default ConfirmedBooking;
