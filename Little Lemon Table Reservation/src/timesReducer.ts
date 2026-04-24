/**
 * Alternate reducer implementation: fetches times via `fetchAPI` and removes slots
 * already stored in `localStorage` under `Bookings` for the same date.
 * Note: the running app uses `updateTimes` / `initializeTimes` from `App.tsx` instead;
 * this module documents the “filter booked times” pattern for reference or future use.
 */
declare const fetchAPI: (date: Date) => string[];

export type UpdateTimesAction = {
    type: 'UPDATE_TIMES';
    payload: string;
};

/** Loads API times for `dateString`, then subtracts times booked in localStorage. */
const fetchAndFilterTimes = (dateString: string) => {
    const apiTimes = fetchAPI(new Date(dateString));
    const existingBookings = JSON.parse(localStorage.getItem("Bookings") || "[]");
    
    // Get an array of just the times that have already been booked for this specific date
    const bookedTimes = existingBookings
        .filter((booking: { date: string, time: string }) => booking.date === dateString)
        .map((booking: { date: string, time: string }) => booking.time);
        
    // Return only the times that are NOT in the bookedTimes array
    return apiTimes.filter(time => !bookedTimes.includes(time));
};

export const updateTimes = (state: string[], action: UpdateTimesAction) => {
    if (action.type === 'UPDATE_TIMES') {
        return fetchAndFilterTimes(action.payload);
    }
    return state;
};

export const initializeTimes = () => {
    const today = new Date().toISOString().slice(0, 10);
    return fetchAndFilterTimes(today);
};