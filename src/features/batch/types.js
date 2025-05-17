/**
 * @typedef {Object} Batch
 * @property {number} id - Batch ID
 * @property {string} name - Batch name
 * @property {string} startDate - Start date (YYYY-MM-DD)
 * @property {string} endDate - End date (YYYY-MM-DD)
 * @property {string} status - Batch status (Planned, Active, Completed)
 * @property {number} plantCount - Number of plants in batch
 * @property {string} [notes] - Optional notes about the batch
 */

/**
 * @typedef {Object} BatchFormData
 * @property {string} name - Batch name
 * @property {string} startDate - Start date
 * @property {string} endDate - End date
 * @property {string} status - Batch status
 * @property {string} [notes] - Optional notes
 */

// Re-export for better type hinting
export { };