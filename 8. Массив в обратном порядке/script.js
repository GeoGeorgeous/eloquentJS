/*
Напишите 2 функции: reverseArray и reverseArrayInPlace.
Первая функция, reverseArray, принимает массив в качестве аргумента и создаёт новый массив,
содержащий те же элементы в обратном порядке. Вторая, reverseArrayInPlace, делает тоже самое, что и метод reverse:
преобразовывает массив, заданный в качестве аргумента, меняя порядок следования его элементов на обратный. Не используйте
для этого стандартный метод reverse.

*/

let arr = ['0', '1', '2', '3', '4', '5', '6', '7']
console.log('До:', arr)

function reverseArray(arr) {
  let reversedArr = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    reversedArr.push(arr[index]);
  }
  return reversedArr
}

function reverseArrayInPlace(arr) {
  let isArrEven = arr.length % 2 === 0; // четный ли массив?

  if (!isArrEven) { // массив не четный
    for (let i = 0; i <= arr.length / 2 ; i++) {
      let old = arr[i]
      arr[i] = arr[arr.length - i - 1]
      arr[arr.length - i - 1] = old
    }
  } else { // массив четный
    let middle = Math.floor(arr.length / 2) // середина
    for (let i = 0; i < middle; i++) {
      let old = arr[i]
      arr[i] = arr[arr.length - i - 1]
      arr[arr.length - i - 1] = old
    }
  }

  console.log('После:', arr)
}

reverseArrayInPlace(arr)


