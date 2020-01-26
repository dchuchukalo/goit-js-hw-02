// 1 - перевести строку в масив
// 2 - вычислить длинну элемента масива
// 3 - сравнить длинну

const findLongestWord = function(string) {
  const stringToArray = string.split(' ');
  let longestWord = stringToArray[0];

  for (let i = 1; i < stringToArray.length; i += 1) {
    if (stringToArray[i].length > longestWord.length) {
      longestWord = stringToArray[i];
    }
  }
  return longestWord;

    // for (const word of stringToArray) {
    //     if (word.length > longestWord.length) {
    //         longestWord = word
    //     }
    // }
    // return longestWord;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'