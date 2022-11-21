const sampleText = 'the quick brown fox jumps over the lazy dog'

const sampleDictionary = ['quick', 'lazy']

function bowdlerize (text, dictionary) {
  const words = text.split(' ')
  const censored = words.map(e => {
    if (dictionary.indexOf(e) !== -1) {
      return e[0] + '*'.repeat(e.length - 2) + e[e.length - 1]
    } else {
      return e
    }
  })
  return censored.join(' ')
}

console.log(bowdlerize(sampleText, sampleDictionary))