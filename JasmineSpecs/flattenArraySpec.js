var flattenArray = require('../flattenArray')

describe('flattenArray function', function() {
  it('should flatten all the arrays in the principal one', function() {
    expect(flattenArray([1, [3, 4, 5]])).toEqual([1, 3, 4, 5])
  })

  it('should return the same input user specified i ncase its invalid', function() {
    expect(flattenArray(null)).toEqual(null)
    expect(flattenArray(1)).toEqual(1)
    expect(flattenArray(undefined)).toEqual(undefined)
  })
})
