/** @vitest-environment jsdom */
/**
 * Integration-style tests for `BookingPage`: reducer dispatch on date change, filtering
 * booked times from `localStorage`, successful submit (navigate + storage), and no duplicate
 * selection in the UI (booked slots are omitted from the time dropdown).
 */
import '@testing-library/jest-dom/vitest';
import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingPage from './BookingPage';

const mockNavigate = vi.fn();
const mockSubmitAPI = vi.fn();
const mockAlert = vi.fn();

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('BookingPage', () => {
    beforeEach(() => {
        localStorage.clear();
        mockNavigate.mockReset();
        mockSubmitAPI.mockReset();
        mockAlert.mockReset();
        vi.stubGlobal('submitAPI', mockSubmitAPI);
        vi.stubGlobal('alert', mockAlert);
    });

    afterEach(() => {
        cleanup();
        vi.unstubAllGlobals();
    });

    test('dispatches UPDATE_TIMES on initial render and when date changes', () => {
        const dispatch = vi.fn();
        render(
            <MemoryRouter>
                <BookingPage availableTimes={['17:00', '18:00']} dispatch={dispatch} />
            </MemoryRouter>
        );

        const today = new Date().toISOString().slice(0, 10);
        expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: today });

        const dateInput = screen.getByLabelText(/Choose date/i);
        fireEvent.change(dateInput, { target: { value: '2026-05-01' } });

        expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: '2026-05-01' });
    });

    test('filters out already booked times for selected date', () => {
        const today = new Date().toISOString().slice(0, 10);
        localStorage.setItem(
            'Bookings',
            JSON.stringify([{ date: today, time: '18:00', guests: '2', occasion: '' }])
        );

        render(
            <MemoryRouter>
                <BookingPage availableTimes={['17:00', '18:00']} dispatch={vi.fn()} />
            </MemoryRouter>
        );

        expect(screen.getByRole('option', { name: '17:00' })).toBeInTheDocument();
        expect(screen.queryByRole('option', { name: '18:00' })).not.toBeInTheDocument();
    });

    test('submits a valid booking, stores it, and navigates to confirmation', () => {
        const dispatch = vi.fn();
        const today = new Date().toISOString().slice(0, 10);
        mockSubmitAPI.mockReturnValue(true);

        render(
            <MemoryRouter>
                <BookingPage availableTimes={['17:00', '18:00']} dispatch={dispatch} />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '17:00' } });
        fireEvent.click(screen.getByRole('button', { name: /Make Your reservation/i }));

        expect(mockSubmitAPI).toHaveBeenCalledWith({
            date: today,
            time: '17:00',
            guests: '1',
            occasion: '',
        });

        const storedBookings = JSON.parse(localStorage.getItem('Bookings') || '[]');
        expect(storedBookings).toContainEqual({
            date: today,
            time: '17:00',
            guests: '1',
            occasion: '',
        });

        expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: today });
        expect(mockNavigate).toHaveBeenCalledWith('/confirmed');
    });

    test('does not offer booked times in the dropdown, so that slot cannot be re-submitted from the UI', () => {
        const dispatch = vi.fn();
        const today = new Date().toISOString().slice(0, 10);
        localStorage.setItem(
            'Bookings',
            JSON.stringify([{ date: today, time: '17:00', guests: '2', occasion: '' }])
        );

        render(
            <MemoryRouter>
                <BookingPage availableTimes={['17:00', '18:00']} dispatch={dispatch} />
            </MemoryRouter>
        );

        expect(screen.queryByRole('option', { name: '17:00' })).not.toBeInTheDocument();
        expect(screen.getByRole('option', { name: '18:00' })).toBeInTheDocument();

        const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
        expect(submitButton).toBeDisabled();

        // No <option value="17:00"> exists; the controlled form keeps time invalid and submit disabled.
        fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '17:00' } });
        expect(submitButton).toBeDisabled();
        expect(mockSubmitAPI).not.toHaveBeenCalled();
        expect(mockAlert).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();
    });
});
