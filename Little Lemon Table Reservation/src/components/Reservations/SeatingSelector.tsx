import { useState, type ChangeEvent } from 'react';
import styles from './SeatingSelector.module.css';

function SeatingSelector() {

    const [wheelChair, setWheelChair] = useState(false);
    const [highChair, setHighChair] = useState(false);
    const [occasion, setOccasion] = useState('');

    const toggleWheelChair = () => {
        setWheelChair((prev) => !prev);
    };

    const toggleHighChair = () => {
        setHighChair((prev) => !prev);
    };

     const handleOccasionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setOccasion(event.target.value);
    };

    return  (
        <fieldset className={styles.seatingOptions}>
            <legend className={`${styles.seatingLegend} section-title primary-green`}>Seating Preferences</legend>
            <div className={styles.occasionGroup}>
                <select id="occasion" value={occasion} onChange={handleOccasionChange} className={styles.occasionSelect}>
                    <option value="">Select an occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Meeting</option>
                    <option value="other">Other</option>
                </select>
                <label htmlFor="occasion" className={`${styles.occasionLabel} pure-black`}>(Optional)</label>
            </div>
            <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel} id='wheelChairBox'>
                    <input
                        type="checkbox"
                        checked={wheelChair}
                        onChange={toggleWheelChair}
                    />
                    Wheelchair Accessible
                </label>
                <label className={styles.checkboxLabel} id='highChairBox'>
                    <input
                        type="checkbox"
                        checked={highChair}
                        onChange={toggleHighChair}
                    />
                    High Chair Available
                </label>
            </div>
        </fieldset>
    )
};

export default SeatingSelector;