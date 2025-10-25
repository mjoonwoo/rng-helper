/**
 * Picks a random element from an array.
 * @param {Array} array - The array to pick from
 * @returns {*} A random element from the array
 */
export function pick(array) {
    if (!Array.isArray(array) || array.length === 0)
        throw new Error("array must not be empty");
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

/**
 * Picks multiple random elements from an array.
 * @param {Array} array - The array to pick from
 * @param {Number} count - The number of elements to pick
 * @returns {Array} An array of randomly picked elements
 */
export function multiPick(array, count) {
    if (!Array.isArray(array) || count > array.length)
        throw new Error("invalid count");
    const copy = [...array];
    const result = [];
    for (let i = 0; i < count; i++) {
        const idx = Math.floor(Math.random() * copy.length);
        result.push(copy.splice(idx, 1)[0]);
    }
    return result;
}
