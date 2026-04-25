/** @vitest-environment jsdom */
/**
 * Tests for `BookingForm`: labels, validation messages, controlled updates, submit wiring,
 * and disabled submit states. Uses mocked props instead of the real `BookingPage`.
 */
import '@testing-library/jest-dom/vitest';
import { vi as jest, describe, test, expect, afterEach, beforeEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import BookingForm from './BookingForm';

    // Define mockProps outside beforeEach to avoid re-declaring it.
    // We'll reset function mocks in beforeEach.
    const mockProps = {
        firstName: "Jane",
        setFirstName: jest.fn(),
        lastName: "Doe",
        setLastName: jest.fn(),
        phone: "5551234567",
        setPhone: jest.fn(),
        email: "",
        setEmail: jest.fn(),
        specialRequests: "",
        setSpecialRequests: jest.fn(),
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
        mockProps.setFirstName.mockReset();
        mockProps.setLastName.mockReset();
        mockProps.setPhone.mockReset();
        mockProps.setEmail.mockReset();
        mockProps.setSpecialRequests.mockReset();
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

    test('Disables the submit button when first name is empty', () => {
        const invalidProps = { ...mockProps, firstName: "" };
        render(<BookingForm {...invalidProps} />);
        const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
        expect(submitButton).toBeDisabled();
    });

    test('Disables the submit button when last name is empty', () => {
        const invalidProps = { ...mockProps, lastName: "" };
        render(<BookingForm {...invalidProps} />);
        const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
        expect(submitButton).toBeDisabled();
    });

    test('Disables the submit button when phone number is empty', () => {
        const invalidProps = { ...mockProps, phone: "" };
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

    test('Calls setFirstName on first name input change', () => {
        render(<BookingForm {...mockProps} />);
        const nameInput = screen.getByLabelText(/First name/i);
        fireEvent.change(nameInput, { target: { value: 'John Smith' } });
        expect(mockProps.setFirstName).toHaveBeenCalledWith('John Smith');
    });

    test('Calls setEmail on email input change', () => {
        render(<BookingForm {...mockProps} />);
        const emailInput = screen.getByLabelText(/Email/i);
        fireEvent.change(emailInput, { target: { value: 'jane@example.com' } });
        expect(mockProps.setEmail).toHaveBeenCalledWith('jane@example.com');
    });

    test('Calls setSpecialRequests on textarea change', () => {
        render(<BookingForm {...mockProps} />);
        const specialRequestsInput = screen.getByLabelText(/Special requests/i);
        fireEvent.change(specialRequestsInput, { target: { value: 'Window seat if available' } });
        expect(mockProps.setSpecialRequests).toHaveBeenCalledWith('Window seat if available');
    });

    test('Disables the submit button when guests are outside the 1-10 range', () => {
        const invalidProps = { ...mockProps, guests: "12" };
        render(<BookingForm {...invalidProps} />);
        const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
        expect(submitButton).toBeDisabled();
    });
});
