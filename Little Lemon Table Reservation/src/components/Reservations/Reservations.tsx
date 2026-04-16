import styles from './Reservations.module.css';

function Reservations() {
  return (
    <div className={styles.reservationsPage}>
      <section className={styles.banner}>
        <h1 className='display-text primary-yellow'>Reservations</h1>
      </section>
      {/* Form goes here next */}
    </div>
  );
}

export default Reservations;