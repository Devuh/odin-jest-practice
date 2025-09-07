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
      return Math.round((num1 + num2) * 100) / 100;
    } else {
      throw new Error('add() requires two arguments.');
    }
  }

  static subtract(num1, num2) {
    if(typeof num1 == 'number' && typeof num2 == 'number') {
      return Math.round((num1 - num2) * 100) / 100;
    } else {
      throw new Error('subtract() requires two arguments');
    }
  }

  static divide(num1, num2) {
    if(typeof num1 == 'number' && typeof num2 == 'number' && num2 !== 0) {
      return Math.round((num1 / num2) * 100) / 100;
    } else if(num2 === 0) { 
      throw new Error('Cannot divide by zero')
    } else {
      throw new Error('divide() requires two arguments');
    }
  }

  static multiply(num1, num2) {
    if(typeof num1 == 'number' && typeof num2 == 'number') {
      return Math.round((num1 * num2) * 100) / 100;
    } else {
      throw new Error('multiply() requires two arguments');
    }
  }
}

export function caesarCipher(word, shift) {
  if(!word || !shift) throw new Error('caesarCipher() requires two arguments');

  let cipher = [];
  for(let i = 0; i < word.length; i++) {
    let character = word.charAt(i);
    let charCode = character.charCodeAt(0) + shift;
    while(charCode >= 97 && character.charCodeAt(0) <= 90) charCode -= 26;
    if(character.match(/[a-z]/i) && (String.fromCharCode(charCode).match(/[a-z]/i))) {
      character = String.fromCharCode(charCode);
    } else if(character.match(/[a-z]/i)) {
      charCode -= 26;
      character = String.fromCharCode(charCode);
    }
    cipher.push(character);
  }

  return cipher.join('');
}

export function analyzeArray(array) {
  if(array.length === 0) throw new Error('Array must have at least one item');

  let average, min, max, length;

  let sum = 0;
  array.forEach((item) => {
    sum += item;
  });
  average = sum / array.length;

  min = Math.min(...array);
  max = Math.max(...array);

  length = array.length;

  return {'average': average, 'length': length, 'max': max, 'min': min}
}