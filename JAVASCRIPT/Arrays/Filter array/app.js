let words = ['exuberant', 'spary', 'limit', 'elites', 'destruction', 'present']

let result = words.filter(word => word.length > 5);

console.log('words array', words);
console.log('result array', result);

function wordLengthGreaterThan5(para) {
  return para.length > 5
}
console.log(words);
