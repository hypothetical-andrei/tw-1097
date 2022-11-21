function checkAcrostic(text, dictionary) {
  const word = text.split('\n').map(e => e.trim()).filter(e => e).map(e => e[0]).join('')
  return dictionary.indexOf(word) !== -1
}

const sampleText = `
  best
  read
  on
  windy
  nights
`

const sampleDictionary = ['brown', 'blue', 'yellow']

console.log(checkAcrostic(sampleText, sampleDictionary))