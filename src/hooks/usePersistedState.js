import { useState, useEffect } from 'react';

/**
 * Custom hook for persisted state with localStorage validation
 * @param {string} key - localStorage key
 * @param {any} defaultValue - Default value if localStorage is empty or corrupted
 * @returns {[any, Function]} State and setter function
 */
export const usePersistedState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      if (item === null) {
        return defaultValue;
      }

      const parsed = JSON.parse(item);

      // Validate that parsed data matches expected type
      if (typeof parsed !== typeof defaultValue) {
        console.warn(`Type mismatch for ${key}, using default value`);
        return defaultValue;
      }

      // Specific check for Arrays since typeof [] is 'object'
      if (Array.isArray(defaultValue) && !Array.isArray(parsed)) {
        console.warn(`Expected array for ${key} but got object, using default value`);
        return defaultValue;
      }

      return parsed;
    } catch (error) {
      console.error(`Error reading ${key} from localStorage:`, error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(`Error writing ${key} to localStorage:`, error);
      // Handle quota exceeded or other errors
      if (error.name === 'QuotaExceededError') {
        console.warn('localStorage quota exceeded, clearing old data');
        try {
          // Try to clear some space
          localStorage.removeItem(key);
          localStorage.setItem(key, JSON.stringify(state));
        } catch (retryError) {
          console.error('Failed to write to localStorage after clearing:', retryError);
        }
      }
    }
  }, [key, state]);

  return [state, setState];
};
