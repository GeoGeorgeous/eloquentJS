/*
Напишите функцию min которая принимает 2 аргумента и возвращает их минимум
*/

const min = (num1, num2) => {
  if (num1 < num2) return num1
  else if (num1 == num2) return null
  else return num2
}

console.log(min(21, 91));
console.log(min(11, 2));
console.log(min(22, 22));


