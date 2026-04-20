import styles from './Reservations.module.css';
import ReservationDetails from './ReservationDetails';
import ContactForm from './ContactForm';
import SeatingSelector from './SeatingSelector';


function Reservations() {



  return (
    <div className={styles.reservationsPage}>
        <section className={styles.banner}>
            <h1 className='display-text primary-yellow'>Reservations</h1>
        </section>
        <section className={styles.reservationDetailsSection}>
            <ReservationDetails />
        </section>
        <section className={styles.seatingSelectorSection}>
            <SeatingSelector />
        </section>
        <section className={styles.contactFormSection}>
            <ContactForm />
        </section>
    </div>
  );
}

export default Reservations;