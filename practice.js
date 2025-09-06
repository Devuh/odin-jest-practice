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

export class Calculator {
  static add(num1, num2) {
    if(typeof num1 == 'number' && typeof num2 == 'number') {
      return num1 + num2;
    } else {
      throw new Error('add() requires two arguments.');
    }
  }
}