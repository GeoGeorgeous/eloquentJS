/*
  Используйте метод reduce в сочетании с методом concat для свертки массива,
  состоящего из нескольких массивов, в один массив, у которого есть все элементы входных массивов
*/

let arrays = [[1, 2, 3], [4, 5], [6]];

const united = arrays.reduce( function(previousValue, currentValue) {
  return previousValue.concat(currentValue)
});

console.log(united);


