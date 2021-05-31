/*
Напишите функцию deepEqual, которая принимает два значения и возвращает true,
только если эти объекты имеют одинаковое значение или являются объектами
с одинаковыми свойствами и значения свойств равны при сравнении с рекурсивным вызовом deepEqual
*/

function deepEqual(a, b) {
  const firstKeys = Object.keys(a);
  const secondKeys = Object.keys(b);

  if (firstKeys.length !== secondKeys.length) {
    return false;
  }

  return firstKeys.every(function (key) {
    return a[key] === b[key];
  });
}

// let obj = {here: {is: "an"}, object: 2};
// // console.log(deepEqual(obj, obj));
// // // → true
// // console.log(deepEqual(obj, {here: 1, object: 2}));
// // // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

const first = {
  property: 'value',
  anotherProperty: 'another value'
};

const second = {
  property: 'value',
  anotherProperty: 'another value'
};

const third = {
  property: 'value',
  anotherProperty: 'one more value'
};

console.log(deepEqual(first, second)); // true
console.log(deepEqual(second, third)); // false
