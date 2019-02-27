function inRange(number, start, end) {
  if (!end) {
    end = start
    start = 0
  }

  if (start > end) [start, end] = [end, start]

  return start < number && number < end
}

module.exports = inRange
