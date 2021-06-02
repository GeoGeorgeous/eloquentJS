/*
  Можете ли вы придумать способ вызова hasOwnPropery для объекта у которого есть собственное свойство с таким именем?
*/

let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, 'one'))
// console.log(map.hasOwnProperty("one").call(Object));
// → true
