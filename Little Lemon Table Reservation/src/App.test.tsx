/**
 * Unit tests for `initializeTimes` and `updateTimes` exported from `App.tsx`.
 * Stubs global `fetchAPI` to match the course API shape without a browser.
 */
import { vi as jest, describe, beforeAll, test, expect } from 'vitest';
import { initializeTimes, updateTimes } from './App';

describe('Booking Form State Functions', () => {
    beforeAll(() => {
        // Mock the global fetchAPI function provided by the Meta script
        jest.stubGlobal('fetchAPI', jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']));
    });

    test('initializeTimes returns the correct expected value', () => {
        const times = initializeTimes();
        
        expect(times.length).toBeGreaterThan(0);
        expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    });

    test('updateTimes returns the correct available times for a given date', () => {
        const initialState = ['17:00'];
        const action = { type: 'UPDATE_TIMES', payload: '2026-04-24' } as const;
        
        const newState = updateTimes(initialState, action);
        
        expect(newState.length).toBeGreaterThan(0);
        expect(newState).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    });
});