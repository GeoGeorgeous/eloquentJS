/*
Напишите программу, в которой с помощью console.log выводятся все числа от 1 до 100 с двумя исключениями.
Для чисел, кратных 3, вместо числа выводится "Fizz", а для числен, кратных 5 (но не 3) — "Buzz".
Когда это заработает, измените программу так, чтобы она печатала «FizzBuzz» для чисел, кратных только одному из них.
*/

for (let count = 1; count <= 100; count++) {
  if (count % 3 == 0  && count % 5 == 0) {
    console.log('FizzBuzz')
  } else if (count % 3 == 0) {
    console.log('Fizz')
  } else if (count % 5 == 0) {
    console.log('Buzz')
  } else {
    console.log(count)
  }
};

/* Короче и лучше: */

// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }
