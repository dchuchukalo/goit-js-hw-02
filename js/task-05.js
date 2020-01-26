/* Нашел метод replace в google, разобрался как можно заменять разные значения. 
Этот вариант показался мне интересным, по тому что можно убрать лишние символы,
искать именно целое слово и не будет возникать ошибка с тем что искомое слово
может быть частью какого то другого слова.  */

// Вариант 1

const checkForSpam = function(message) {
  const validationArray = message.replace(/\[|\]/g, '').toLowerCase();
  return validationArray.includes('spam') || validationArray.includes('sale');
};

// Вариант 2

// const checkForSpam = function(message) {
//   const validationArray = message.replace(/\[|\]/g, '').toLowerCase();
//   if (
//     validationArray.indexOf('spam') !== -1 ||
//     validationArray.indexOf('sale') !== -1
//   ) {
//     return true;
//   }

//   return false;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
