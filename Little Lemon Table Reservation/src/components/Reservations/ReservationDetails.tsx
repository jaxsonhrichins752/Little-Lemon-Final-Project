import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import dayjs, { Dayjs } from 'dayjs';
import styles from './ReservationDetails.module.css';

function ReservationDetails() {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState<Dayjs | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const sizes = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.container}>
        
        {/* Date and Time Row */}
        <div className={styles.pickerRow}>
          
          <div className={styles.fieldGroup}>
            <label className={styles.label}>RESERVATION DATE</label>
            <DatePicker
              value={date}
              onChange={(newValue) => setDate(newValue)}
              slotProps={{
                textField: {
                  label: undefined,
                  fullWidth: false,
                  className: date ? styles.activePill : styles.pillButton,
                  placeholder: "Select Date"
                }
              }}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>SELECT TIME</label>
            <TimePicker
              value={time}
              onChange={(newValue) => setTime(newValue)}
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
              }}
              slotProps={{
                textField: {
                  label: undefined,
                  fullWidth: false,
                  className: time ? styles.activePill : styles.pillButton,
                  placeholder: "Select Time"
                }
              }}
            />
          </div>
        </div>

        {/* Party Size Section */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>PARTY SIZE (INCLUDING CHILDREN)</label>
          <div className={styles.numberRow}>
            {sizes.map((num) => (
              <button
                key={num}
                type="button"
                className={`${styles.circleButton} ${selectedSize === num ? styles.activeCircle : ''}`}
                onClick={() => setSelectedSize(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <p className={styles.disclaimer}>
            FOR GROUPS BIGGER THAN 8 PLEASE CALL AHEAD AT 555 555 5555
          </p>
        </div>
        
      </div>
    </LocalizationProvider>
  );
}

export default ReservationDetails;