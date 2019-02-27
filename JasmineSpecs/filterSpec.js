var filter = require('../filter')

describe('filter function', function() {
  it('should return empty array', function() {
    expect(filter(null, n => n > 2)).toEqual([])
  })

  var number = 3
  it(`should return array with numbers greater then ${number}`, function() {
    expect(filter([1, 2, 3, 4, 5, 6, 7], n => n > number)).toEqual([4, 5, 6, 7])
  })

  it('should return an array with odd number', function() {
    expect(filter([1, 2, 3, 4, 5, 6, 7], n => !(n % 2 === 0))).toEqual([1, 3, 5, 7])
  })
})
