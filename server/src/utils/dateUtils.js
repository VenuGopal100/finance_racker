// server/src/utils/dateUtils.js
// Helper functions for working with months and dates.

/**
 * Returns a start and end Date for the given month and year.
 * Example: month = 4, year = 2025 -> 1 April 2025 to 30 April 2025
 */
export const getMonthDateRange = (year, month) => {
  // JS Date month index starts from 0, so subtract 1
  const start = new Date(year, month - 1, 1);
  // Next month, day 0 -> last day of current month
  const end = new Date(year, month, 0, 23, 59, 59, 999);
  return { start, end };
};
