/**
 * @typedef {Object} Plant
 * @property {number} id - Plant ID
 * @property {string} name - Plant name
 * @property {string} type - Plant type (Foliage, Succulent, Tree, etc.)
 * @property {string} status - Plant status (Active, Dormant, Dead)
 * @property {string} acquisitionDate - Date when plant was acquired (YYYY-MM-DD)
 * @property {string} location - Where the plant is located
 * @property {string} [notes] - Optional notes about the plant
 */

/**
 * @typedef {Object} PlantFormData
 * @property {string} name - Plant name
 * @property {string} type - Plant type
 * @property {string} status - Plant status
 * @property {string} acquisitionDate - Acquisition date
 * @property {string} location - Plant location
 * @property {string} [notes] - Optional notes
 */

// Re-export for better type hinting
export { };