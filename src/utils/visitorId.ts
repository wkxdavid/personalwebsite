/**
 * Utility to get or create a unique visitor ID using cookies
 * This ID persists across sessions to identify repeat visitors
 */

const VISITOR_ID_COOKIE = 'visitor_id';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

/**
 * Generates a unique visitor ID
 */
function generateVisitorId(): string {
  // Generate a random UUID-like string
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}-${Math.random().toString(36).substring(2, 15)}`;
}

/**
 * Gets the visitor ID from cookie, or creates a new one if it doesn't exist
 */
export function getVisitorId(): string {
  if (typeof document === 'undefined') {
    return generateVisitorId();
  }

  // Try to get existing visitor ID from cookie
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === VISITOR_ID_COOKIE && value) {
      return decodeURIComponent(value);
    }
  }

  // No existing cookie, create a new visitor ID
  const newVisitorId = generateVisitorId();
  
  // Set cookie with 1 year expiration
  const expires = new Date();
  expires.setTime(expires.getTime() + COOKIE_MAX_AGE * 1000);
  document.cookie = `${VISITOR_ID_COOKIE}=${encodeURIComponent(newVisitorId)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;

  return newVisitorId;
}

