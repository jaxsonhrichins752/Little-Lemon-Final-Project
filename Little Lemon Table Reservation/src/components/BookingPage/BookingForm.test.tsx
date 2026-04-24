/** @vitest-environment jsdom */
import '@testing-library/jest-dom/vitest';
import { vi as jest, describe, test, expect, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
    afterEach(() => {
        cleanup();
    });

    const mockProps = {
        date: "2026-04-24",
        setDate: jest.fn(),
        time: "17:00",
        setTime: jest.fn(),
        guests: "2",
        setGuests: jest.fn(),
        occasion: "Birthday",
        setOccasion: jest.fn(),
        availableTimes: ['17:00', '18:00'],
        submitForm: jest.fn(),
    };

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
});
