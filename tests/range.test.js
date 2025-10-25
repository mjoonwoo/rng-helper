// range.test.js
import { describe, it, expect } from 'vitest';
import { range } from '../range.js';

describe('range()', () => {
    it('should return a number between min and max (inclusive)', () => {
        for (let i = 0; i < 100; i++) {
            const result = range(1, 10);
            expect(result).toBeGreaterThanOrEqual(1);
            expect(result).toBeLessThanOrEqual(10);
        }
    });

    it('should return the same number when min equals max', () => {
        expect(range(5, 5)).toBe(5);
    });

    it('should throw an error if min or max is not a number', () => {
        expect(() => range('a', 10)).toThrow();
        expect(() => range(0, null)).toThrow();
    });

    it('should work with negative numbers', () => {
        for (let i = 0; i < 100; i++) {
            const result = range(-5, 5);
            expect(result).toBeGreaterThanOrEqual(-5);
            expect(result).toBeLessThanOrEqual(5);
        }
    });
});
