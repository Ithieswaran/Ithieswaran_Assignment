function reverseWords() {

  const inputSentence = prompt("Enter a sentence: ");
  if (inputSentence === null || inputSentence === "") {
    return "Invalid input. Please enter a sentence.";
  }

  const words = inputSentence.split(' ');

  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });

  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}


const reversedSentence = reverseWords();
console.log("Reversed Sentence:", reversedSentence);
