// const logItems = function(array) {
//   for (const element of array) {
//     console.log(`${array.indexOf(element) + 1} - ${element}`);
//   }
// };
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 15, 25]);

/* Сначала написал код сверху. Казалось что всё работает правильно,
но когда попробовал писать повторяющиеся значения в масив,
то на место indexOf подставлялся индекс значения который был ближе к началу.
переписал на код который ниже. Такой ошибки уже нет.   */

const logItems = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 15, '12', 'asdad', -10]);

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);