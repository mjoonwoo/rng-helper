// chance.test.js
import { describe, it, expect } from 'vitest';
import { chance } from '../chance.js';

describe('chance()', () => {
    it('should return true roughly according to the given probability', () => {
        let success = 0;
        const trials = 1000;
        for (let i = 0; i < trials; i++) {
            if (chance(50)) success++;
        }
        const ratio = success / trials;
        expect(ratio).toBeGreaterThan(0.35);
        expect(ratio).toBeLessThan(0.65);
    });

    it('should throw an error if probability is out of range', () => {
        expect(() => chance(-10)).toThrow();
        expect(() => chance(120)).toThrow();
    });

    it('should return a boolean', () => {
        const result = chance(50);
        expect(typeof result).toBe('boolean');
    });
});
