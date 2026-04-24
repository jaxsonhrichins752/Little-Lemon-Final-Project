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

    test('Disables the submit button when date is empty', () => {
        const invalidProps = { ...mockProps, date: "" };
        render(<BookingForm {...invalidProps} />);
        const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
        expect(submitButton).toBeDisabled();
    });

    test('Disables the submit button when guests are outside the 1-10 range', () => {
        const invalidProps = { ...mockProps, guests: "12" };
        render(<BookingForm {...invalidProps} />);
        const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
        expect(submitButton).toBeDisabled();
    });
});
