/*
Напишите функцию countBs, которая принимает строку в качестве единсвенного аргумент и возвращает
число, показывающее, сколько больших букв «В» содержится в этой строке.
Затем напишите функцию countChar, которая ведет себя как countBs, за исключением того, что принимает
второй аргумент, указывающий, какие именно символы нужно посчитать (вместо того, чтобы считать только большие буквы В).
Перепишите countBs, чтобы использовать эту новую функцию.
*/

function countBs(string) {
  let res = null
  for (letter of string) {
    if (letter === 'B') res += 1;
  }
  return res
}

function countChar(string, target) {
  let res = null
  for (letter of string) {
    if (letter === target) res += 1;
  }
  return res
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));



