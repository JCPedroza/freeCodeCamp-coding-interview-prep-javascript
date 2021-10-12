const wordSplit = (text) =>
  text
    .replace(/[.,:;?!]/g, '')
    .split(/\s/)
    .filter(word => word !== '')
    .map(word => word.toLowerCase())

const countWords = (text) => {
  const wordCount = {}

  const count = (word) => {
    wordCount[word] ? wordCount[word]++ : wordCount[word] = 1
  }
  wordSplit(text).forEach(word => count(word))

  return wordCount
}

const wordFrequency = (text = '', topn) =>
  Object
    .entries(countWords(text))
    .sort((a, b) => b[1] - a[1])
    .slice(0, topn)

module.exports = wordFrequency
