const strDiff = (me, other) => {
  if (me.length !== other.length) {
    return -1
  }
  let count = 0
  for (let i = 0; i < me.length; i++) {
    if (me[i] !== other[i]) {
      count++
    }
  }
  return count
}

console.log(strDiff('a', 'ab'))
console.log(strDiff('ab', 'ab'))
console.log(strDiff('ac', 'ab'))
