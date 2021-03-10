// Write a function that accepts a strings and returns an object where keys are words within the string and values are the number of occurances

const testString = "this is this and that";
const testString2 = "one two one three three one two one one one one four";
function wordCounts(str) {
  const words = {};
  const arrayOfWords = str.split(' ');
  for (let i = 0; i < arrayOfWords.length; i++) {
    const word = arrayOfWords[i];
    // The object has two different states:
    // 1) the word exists
    // 2) the word doesn't exist
    if (words[word]) { // word exists we increment the value of the word by 1
      words[word] += 1;
    } else { // word doesn't exist we set the value to 1
      words[word] = 1;
    }
  }
  return words;
}

console.log(wordCounts(testString));
console.log(wordCounts(testString2));

// {
//   this: 2,
//   is: 1,
//   and: 1,
//   that: 1
// }



