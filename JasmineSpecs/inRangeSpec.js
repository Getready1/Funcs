var inRange = require('../inRange')

describe('inRange function', function() {
  it('should return true', function() {
    expect(inRange(3, 2, 4)).toBe(true)
    expect(inRange(1, 2)).toBe(true)
    expect(inRange(1.2, 2)).toBe(true)
    expect(inRange(5.2, 4)).toBe(false)
    expect(inRange(-3, -2, -6)).toBe(true)
  })
})
