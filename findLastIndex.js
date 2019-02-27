function findLastIndex(array, predicate, searchFromIndex) {
  var length = array == null ? 0 : array.length
  var c = searchFromIndex ? (searchFromIndex > length - 1 ? -1 : searchFromIndex < 0 ? -1 : searchFromIndex) : length - 1

  while (c > 0) {
    if (predicate(array[c])) return c
    c--
  }

  return -1
}

module.exports = findLastIndex
