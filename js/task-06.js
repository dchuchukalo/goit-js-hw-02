// Вариант 1

// let numbers = [];

// const inputNumberRef = document.querySelector('.inputNumber');

// // Button Confirm
// const buttonConfirmRef = document.querySelector('.buttonConfirm');
// buttonConfirmRef.addEventListener('click', () => {
//   let input = inputNumberRef.value;
//   numbers.push(input);
// });

// // Button Cancel
// const buttonCancelRef = document.querySelector('.buttonCancel');

// buttonCancelRef.addEventListener('click', () => {
//   let total = 0;
//   for (const value of numbers) {
//     total += Number(value);
//   }
//   console.log(`Общая сумма чисел равна ${total}`);
//   numbers = [];
// });

/* Попоробовал сделать через стягивание значений из инпутов.
Cтрока 24 для того что бы после успешного посчета и вывода результата по cancel,
значение массива скидывалось. Если этого не делаю, при повторном нажатии cancel
высвечивается предыдущий результат. В голову больше не пришло мыслей как можно
реализовать по другому. */

// Вариант 2

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число для сложения');
  if (input === null) {
    if (numbers.length < 1) {
      alert('Введите хотя бы одно слогаемое!');
      continue;
    }
    for (const value of numbers) {
      total += value;
    }
    console.log (`Общая сумма чисел равна ${total}`);
    break;
  }

  const isNaN = Number.isNaN(Number(input));

  if (isNaN) {
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  }

  numbers.push(Number(input));
}
