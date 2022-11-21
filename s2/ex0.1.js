const sampleArray = [2015, 2000, 1988, 1971]

const getAges = (birthYears, currentYear, threshold) => birthYears.map(e => currentYear - e).filter(e => e >= threshold)

console.log(getAges(sampleArray, 2022, 18))