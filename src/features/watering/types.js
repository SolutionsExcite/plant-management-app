/**
 * @typedef {Object} Watering
 * @property {number} id - Watering ID
 * @property {number} plantId - Associated plant ID
 * @property {string} date - Watering date (YYYY-MM-DD)
 * @property {number} amount - Amount of water in ml
 * @property {string} [notes] - Optional notes about the watering
 */

/**
 * @typedef {Object} WateringFormData
 * @property {number} plantId - Associated plant ID
 * @property {string} date - Watering date
 * @property {number} amount - Amount of water
 * @property {string} [notes] - Optional notes
 */

// Re-export for better type hinting
export { };