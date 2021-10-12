const splitTextIntoWords = (text) =>
  text
    .replace(/[.,:;?!]/g, '') // remove punctuation
    .split(/\s/) // split into words based on whitespace
    .filter(word => word !== '')
    .map(word => word.toLowerCase())

const countWords = (text) =>
  splitTextIntoWords(text).reduce((wordCount, word) => {
    wordCount[word] ??= 0
    wordCount[word]++
    return wordCount
  }, {})

const wordFrequency = (text = '', topN) =>
  Object
    .entries(countWords(text))
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)

module.exports = wordFrequency
