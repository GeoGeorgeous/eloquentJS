/*
  Реализуйте метод every, принимающий в качестве параметров массив и предикативную функцию. Напишите две версии:
  одну с использованием цикла, а вторую — с применением метода some.
*/

function every(array, test) {
  let counter = 0;
  for (element of array) {
    if (!test(element)) {
      counter++
    };
  }
  return !counter
}

function everySome(array, test) {
  return array.some(test);
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log('')

console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true


