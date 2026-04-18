import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { Dayjs } from 'dayjs';

function ReservationDate() {

    const [date, setDate] = useState<Dayjs | null>(null);
  return (
    // This wrapper is required for the picker to function
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
      sx={{
        '.MuiPickersToolbar-root': {
        color: '#ad1457',
        borderRadius: '20px',
        borderWidth: '5px',
        borderColor: '#e91e63',
        border: '5px solid',
        backgroundColor: '#f48fb1',
        },}}
      value={date}
      onChange={(newValue) => setDate(newValue)}
      label="Select Reservation Date"
      />
    </LocalizationProvider>
  );
}

export default ReservationDate;