/**
 * Date, time, and party-size UI using MUI X pickers (Dayjs). Styling is customized via
 * the `pickerStyle` helper so inputs match the restaurant’s green/yellow palette.
 */
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { Dayjs } from 'dayjs';
import styles from './ReservationDetails.module.css';

function ReservationDetails() {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState<Dayjs | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const sizes = [1, 2, 3, 4, 5, 6, 7, 8];

  // This function returns the MUI styling object based on whether a value is selected
  const pickerStyle = (isSelected: boolean) => ({
    width: '200px',
    '& .MuiInputBase-root': {
      height: '45px',
      borderRadius: '50px',
      backgroundColor: isSelected ? 'var(--primary-green)' : 'var(--primary-yellow)',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      paddingRight: '10px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& input': {
      textAlign: 'center',
      fontWeight: 700,
      fontSize: '0.9rem',
      fontFamily: 'inherit',
      backgroundColor: 'transparent !important', // Removes the white box
      boxShadow: 'none !important', // Removes any internal shadows
      // This forces the color of the text/placeholder
      WebkitTextFillColor: isSelected ? 'var(--primary-yellow)' : 'var(--primary-green)',
    },
    '& .MuiSvgIcon-root': {
      fill: isSelected ? 'var(--primary-green)' : 'var(--primary-yellow)',
    }
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.container}>
        
        <div className={styles.pickerRow}>
          {/* Reservation Date */}
          <div className={styles.fieldGroup}>
            <label className={`${styles.label} section-title`}>RESERVATION DATE</label>
            <DatePicker
              value={date}
              onChange={(newValue) => setDate(newValue)}
              slotProps={{
                textField: {
                  sx: pickerStyle(!!date),
                }
              }}
            />
          </div>

          {/* Select Time */}
          <div className={styles.fieldGroup}>
            <label className={`${styles.label} section-title`}>SELECT TIME</label>
            <TimePicker
              value={time}
              onChange={(newValue) => setTime(newValue)}
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
              }}
              slotProps={{
                textField: {
                  sx: pickerStyle(!!time),
                }
              }}
            />
          </div>
        </div>

        {/* Party Size */}
        <div className={styles.fieldGroup}>
          <label className={`${styles.label} section-title`}>PARTY SIZE (INCLUDING CHILDREN)</label>
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
            FOR GROUPS BIGGER THAN 8 PLEASE CALL AHEAD AT 555 123 4567
          </p>
        </div>
        
      </div>
    </LocalizationProvider>
  );
}

export default ReservationDetails;