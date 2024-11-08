//   ===================Problem_3========================

//Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

const countWordOccurrences = (sentence: string, word: string) => {
  const wordLowercase = word.toLocaleLowerCase();
  const sentenceLowercase = sentence.toLocaleLowerCase();
  const convertArray = sentenceLowercase.split(" ");
  let count = 0;
  for (let i = 0; i < convertArray.length; i++) {
    if (convertArray[i] === wordLowercase) {
      count++;
    }
  }
  return count;
};
// const words = countWordOccurrences(
//   "I love typescript typescript",
//   "typescript"
// );
// console.log(words);
