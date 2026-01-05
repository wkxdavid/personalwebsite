/**
 * Utility functions for tracking website visits
 */

const STORAGE_KEY = 'website_visits';

export interface VisitRecord {
  timestamp: string;
  date: string;
  time: string;
}

/**
 * Records a new visit to the website
 */
export const recordVisit = (): void => {
  try {
    const now = new Date();
    const timestamp = now.toISOString();
    const date = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const time = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    const visit: VisitRecord = {
      timestamp,
      date,
      time,
    };

    const existingVisits = getVisits();
    const updatedVisits = [visit, ...existingVisits];

    // Limit to last 50 visits to prevent localStorage from getting too large
    const limitedVisits = updatedVisits.slice(0, 50);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedVisits));
  } catch (error) {
    console.error('Failed to record visit:', error);
  }
};

/**
 * Retrieves all recorded visits
 */
export const getVisits = (): VisitRecord[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const visits = JSON.parse(stored) as VisitRecord[];
    return visits;
  } catch (error) {
    console.error('Failed to retrieve visits:', error);
    return [];
  }
};

/**
 * Clears all visit records
 */
export const clearVisits = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear visits:', error);
  }
};

