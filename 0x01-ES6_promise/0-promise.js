/* eslint-disable no-unused-vars */

/**
 * Returns a new promise that does nothing.
 * @returns {Promise} A promise that neither resolves nor rejects.
 */
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // The promise executor is intentionally left empty
  });
  }
