// Turn each string separated by space into a single string in array so we can compare
export default function filters(data, string) {
  // We split and then filter to remove the empty string
  const allStrings = string.split(' ').filter(elem => elem !== '')

  // Compares a string with another
  const compareStrings = (st1, st2) => {
    return st1.toLowerCase().includes(st2.toLowerCase())
  }

  // Checks if toSearchFor IsIn Array
  const isInSubString = (toSearchFor, container) => {
    let acc = false
    container.forEach(content => {
      if (compareStrings(toSearchFor, content)) {
        acc = true
      }
    })
    return acc
  }

  // The results you found
  const filtered = data.filter(result => isInSubString(result, allStrings))
  return filtered
}
// filters(WORD_DATA, 'St ')
