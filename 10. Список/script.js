/*
Напишите функцию arrayToList, которая строит список, чья структура подобна показанной, если передать функции массив
[1, 2, 3] в качестве аргумента. Напишите также функцию listToArray, создающую массив из списка.
Затем добавьте вспомогательную функцию prepend, принимающую элемент и список и создающая новый список,
в котором заданный элемент добавлен в начало исходного списка. Кроме этого, создайте функцию nth, принимающую
список и число и возвращающую элемент , находящийся в заданной позиции в этом списке (где ноль соответствует первому элементу),
или undefined, если элемента в заданной позиции не существует. Напишите рекурсивную версию функции nth.
*/

let arr = [1, 2, 3]

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  return {value: element, rest: list}
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

let list = arrayToList(arr);
let newList = prepend('Новый элемент', list);
console.log(nth(newList, 0))



