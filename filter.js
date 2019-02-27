function filter(array, predicate) {
  var result = []
  var c = 0
  var length = array == null ? 0 : array.length

  while (c < length) {
    predicate(array[c]) && result.push(array[c])
    c++
  }

  return result
}
