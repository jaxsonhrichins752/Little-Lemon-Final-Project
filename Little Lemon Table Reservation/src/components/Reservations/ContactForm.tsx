import styles from './ContactForm.module.css';
import { useState } from 'react';

function ContactForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      });
    
        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      // Logic to check if the required fields have at least 1 character
      const isFormValid = 
        formData.firstName.trim().length > 0 && 
        formData.lastName.trim().length > 0 && 
        formData.phoneNumber.trim().length > 0;
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            console.log('Form Submitted:', formData);
        }
      };

      return (
        <section className={styles.contactForm}>
            <h3 className={`${styles.formHeading} section-title pure-black`}>Contact Info</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName" className={`${styles.formLabel} pure-black`}>First Name</label>
                    <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={styles.formInput}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="lastName" className={`${styles.formLabel} pure-black`}>Last Name</label>
                    <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={styles.formInput}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email" className={`${styles.formLabel} pure-black`}>Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formInput}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="phoneNumber" className={`${styles.formLabel} pure-black`}>Phone Number</label>
                    <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={styles.formInput}
                    />
                </div>
                <section className={styles.submitSection}>
                    <div className={styles.signInPrompt}>
                        <p className={`${styles.signInPromptText} pure-black section-body`}>Already have a account?</p>
                        <a href="#" className={`button button-primary pure-black section-body ${styles.signInButton}`}>Sign in</a>
                    </div>
                    <div className={styles.reserveButton}>
                        <button type="submit" className=' section-title pure-black button button-primary' disabled={!isFormValid}>
                            Reserve Now
                        </button>
                    </div>
                </section>
            </form>
        </section>
      );
};

export default ContactForm;