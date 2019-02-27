function flattenArray(array) {
  if (!Array.isArray(array)) return array

  var result = []

  for (var element of array) result = Array.isArray(element) ? [...result, ...element] : [...result, element]

  return result
}

module.exports = flattenArray
