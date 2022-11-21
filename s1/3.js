const countAppearances = (s, c) => {
  let count = 0
  for (const element of s) {
    if (element === c) {
      count++
    }
  }
  return count
}

console.log(countAppearances('a little giraffe', 'a'))
console.log(countAppearances('', 'a'))
console.log(countAppearances('a little giraffe', 'y'))
