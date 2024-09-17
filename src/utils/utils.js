function generateRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function parseDate (dateString) {
  const [day, month, year] = dateString.split('.')
  return new Date(year, month, day)
}

export { generateRandomNumber, parseDate }
