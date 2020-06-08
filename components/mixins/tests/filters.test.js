import filters from '../filters.js'
// const filters = require('../filters.js')

// test:
// 1. no filters returns everything.
// 2. Full string returns one result.
// 3. Partial string match returns one result.
// 4. St matches matches with st
// 5. Do not match input with spaces as entry
// 6. Match incomplete entry with closest match
// 7. Do not show all if length is less than 2
const WORD_DATA = [
  'St Edmunds',
  'Oxford',
  'Cambridge',
  'St Pauls',
  'UCL',
  'Oxford Brookes',
  'St Aidans'
]
describe('One String Search Test', function() {
  // Body of test
  test('If string is shorter than 1 characters, do not return', function() {
    expect(filters(WORD_DATA, '')).toBe(WORD_DATA)
  })
  test('full string match returns one result', function() {
    expect(filters(WORD_DATA, 'St Edmunds')).toEqual(['St Edmunds'])
  })
  test('partial string match returns one result', function() {
    expect(filters(WORD_DATA, 'St Edmund')).toEqual(['St Edmunds'])
  })
})

describe('Multiple Words', function() {
  test('Return all St. Test', function() {
    expect(filters(WORD_DATA, 'St')).toEqual(['St Edmunds', 'St Pauls'])
  })
  test('Spaces Test', function() {
    expect(filters(WORD_DATA, 'St ')).toEqual(['St Edmunds', 'St Pauls'])
  })
  test('Acronym Test', function() {
    expect(filters(WORD_DATA, 'UCL')).toEqual(['UCL'])
  })
  test('Without St Test', function() {
    expect(filters(WORD_DATA, 'Edmunds')).toEqual(['St Edmunds'])
  })
  test('Misspelling Test', function() {
    expect(filters(WORD_DATA, 'St Munds')).not.toEqual(['St Edmunds'])
  })
  test('Closest Match Test', function() {
    expect(filters(WORD_DATA, 'St A')).not.toEqual(['St Aidans'])
  })
})
