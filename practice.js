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
      return Math.floor((num1 + num2) * 100) / 100;
    } else {
      throw new Error('add() requires two arguments.');
    }
  }

  static subtract(num1, num2) {
    if(typeof num1 == 'number' && typeof num2 == 'number') {
      return Math.floor((num1 - num2) * 100) / 100;
    } else {
      throw new Error('subtract() requires two arguments');
    }
  }

  static divide(num1, num2) {
    if(typeof num1 == 'number' && typeof num2 == 'number' && num2 !== 0) {
      return Math.floor((num1 / num2) * 100) / 100;
    } else if(num2 === 0) { 
      throw new Error('Cannot divide by zero')
    } else {
      throw new Error('divide() requires two arguments');
    }
  }
}