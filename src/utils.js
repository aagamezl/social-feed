/**
 * Format a date according to the given format o using a default format
 *
 * @param {Date} time
 * @param {object} format
 * @returns {string}
 */
export const formatDate = (time, format, locale = 'default') => {
  return new Intl.DateTimeFormat(locale, format || {
    hour12: false,
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(time).replace(',', '')
}

export const request = async (url, limit) => {
  const response = await fetch(url.replace('{limit}', limit)) /* global fetch */
  const json = await response.json()

  return json
}
