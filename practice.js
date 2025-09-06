export function capitalize(word = '') {
  if(word) {
    word = word.split('');
    word[0] = word[0].toUpperCase();
    word = word.join('');
  }
  return word;
}

export function reverseString(word = '') {
  let reversedWord = [];

  word = word.split('');
  word.forEach((letter) => {
    reversedWord.unshift(letter);
  });
  
  return reversedWord.join('');
}