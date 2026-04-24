/** @vitest-environment jsdom */
import '@testing-library/jest-dom/vitest';
import { vi as jest, describe, test, expect, afterEach, beforeEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import BookingForm from './BookingForm';

    // Define mockProps outside beforeEach to avoid re-declaring it.
    // We'll reset function mocks in beforeEach.
    const mockProps = {
        date: "2026-04-24",
        setDate: jest.fn(),
        time: "17:00",
        setTime: jest.fn(),
        guests: "2",
        setGuests: jest.fn(),
        occasion: "Birthday",
        setOccasion: jest.fn(),
        availableTimes: ['17:00', '18:00', '19:00'],
        submitForm: jest.fn(),
    };

describe('BookingForm', () => {
    afterEach(() => {
        cleanup();
    });

    beforeEach(() => {
        // Reset mocks before each test to ensure isolation
        mockProps.setDate.mockReset();
        mockProps.setTime.mockReset();
        mockProps.setGuests.mockReset();
        mockProps.setOccasion.mockReset();
        mockProps.submitForm.mockReset();
    });

    test('Renders the Choose Date label', () => {
        render(<BookingForm {...mockProps} />);
        const labelElement = screen.getByText("Choose date");
        expect(labelElement).toBeInTheDocument();
    });

    test('Submits the form successfully when the submit button is clicked', () => {
        render(<BookingForm {...mockProps} />);
        const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
        fireEvent.click(submitButton);
        expect(mockProps.submitForm).toHaveBeenCalled();
    });

    test('Disables the submit button when date is empty', () => {
        const invalidProps = { ...mockProps, date: "" };
        render(<BookingForm {...invalidProps} />);
        const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
        expect(submitButton).toBeDisabled();
    });

    // New tests below

    test('Disables the submit button when time is empty', () => {
        const invalidProps = { ...mockProps, time: "" };
        render(<BookingForm {...invalidProps} />);
        const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
        expect(submitButton).toBeDisabled();
    });

    test('Displays error message for empty date after blur', () => {
        render(<BookingForm {...mockProps} date="" />);
        const dateInput = screen.getByLabelText(/Choose date/i);
        fireEvent.blur(dateInput);
        expect(screen.getByText(/Please choose a valid date./i)).toBeInTheDocument();
    });

    test('Displays error message for empty time after blur', () => {
        render(<BookingForm {...mockProps} time="" />);
        const timeSelect = screen.getByLabelText(/Choose time/i);
        fireEvent.blur(timeSelect);
        expect(screen.getByText(/Please select a time./i)).toBeInTheDocument();
    });

    test('Displays error message for invalid number of guests after blur', () => {
        render(<BookingForm {...mockProps} guests="0" />);
        const guestsInput = screen.getByLabelText(/Number of guests/i);
        fireEvent.blur(guestsInput);
        expect(screen.getByText(/Please enter a number of guests between 1 and 10./i)).toBeInTheDocument();
    });

    test('Calls setDate on date input change', () => {
        render(<BookingForm {...mockProps} />);
        const dateInput = screen.getByLabelText(/Choose date/i);
        fireEvent.change(dateInput, { target: { value: '2026-05-01' } });
        expect(mockProps.setDate).toHaveBeenCalledWith('2026-05-01');
    });

    test('Disables the submit button when guests are outside the 1-10 range', () => {
        const invalidProps = { ...mockProps, guests: "12" };
        render(<BookingForm {...invalidProps} />);
        const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
        expect(submitButton).toBeDisabled();
    });
});
