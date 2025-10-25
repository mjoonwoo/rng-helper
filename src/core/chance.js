/**
 * Returns true with given probability in percent.
 * @param {Number} percent - The probability between 0 and 100
 * @returns {Boolean} True if random number is less than given percent
 */
export function chance(percent) {
    if (typeof percent !== "number" || percent < 0 || percent > 100)
        throw new Error("percent must be between 0 and 100");
    return Math.random() * 100 < percent;
}