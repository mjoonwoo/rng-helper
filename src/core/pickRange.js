/**
 * Returns a random number between min and max (inclusive).
 * @param {Number} min - The minimum value
 * @param {Number} max - The maximum value
 * @returns {Number} A random number between min and max (inclusive)
 */
export function pickRange(min, max) {
    if (typeof min !== "number" || typeof max !== "number")
        throw new Error("min and max must be numbers");
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
