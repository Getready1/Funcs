function intersection(array1, array2) {
  var result = []

  var sortByLength = [array1, array2].sort((a, b) => a.length - b.length)

  for (var n of sortByLength[0]) sortByLength[1].includes(n) && result.push(n)

  return result.filter((v, index) => index === result.indexOf(v))
}
