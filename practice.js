export function capitalize(word = '') {
  if(word) {
    word = word.split('');
    word[0] = word[0].toUpperCase();
    word = word.join('');
  }
  return word;
}