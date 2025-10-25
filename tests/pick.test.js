// pick.test.js
import { describe, it, expect } from 'vitest';
import { pick } from '../pick.js';

describe('pick()', () => {
    const arr = ['apple', 'banana', 'cherry'];

    it('should return an element from the array', () => {
        const result = pick(arr);
        expect(arr.includes(result)).toBe(true);
    });

    it('should throw an error if the array is empty', () => {
        expect(() => pick([])).toThrow();
    });

    it('should throw an error if input is not an array', () => {
        expect(() => pick(null)).toThrow();
        expect(() => pick('string')).toThrow();
    });
});
