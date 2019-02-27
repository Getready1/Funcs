var findLastIndex = require('../findLastIndex')

describe('specs for findLastIndex function', function() {
  it('should return -1 not found', function() {
    expect(findLastIndex([1, 2, 3], n => n == 4)).toEqual(-1)
  })

  it('should return 4', function() {
    expect(findLastIndex([1, 2, 3, 3, 3], n => n == 3)).toEqual(4)
  })

  it('should return 3', function() {
    expect(findLastIndex([1, 2, 3, 3, 3], n => n == 3, 3)).toEqual(3)
  })

  it('should return -1 not found', function() {
    expect(findLastIndex([1, 2, 3, 3, 3], n => n == 3, -1)).toEqual(-1)
  })

  it('should return -1 not found', function() {
    expect(findLastIndex([1, 2, 3, 3, 3], n => n == 3, 5)).toEqual(-1)
  })
})
