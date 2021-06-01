import SCRIPTS from './data.js';

/*
Напишите функцию, которая вычисляет доминирующее направление письма в строке текста
*/


function dominantDirection(text) {
  let ranges = []
  let dominants = []

  for (let char of text) {
    ranges.push(char.codePointAt(0))
  }

  for (let i = 0; i < ranges.length; i++) {
    let code = ranges[i];
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        let dir = script.direction
        let known = dominants.findIndex(d => d.dir === script.direction)
        if (known == -1) {
          dominants.push({dir, count: 1})
        } else {
          dominants[known].count++
        }
      }
    }
  }
  return dominants.reduce((a, b) =>
    a.count > b.count ? a.dir : b.dir, 'Ничего не найдено'
    )
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
console.log(dominantDirection(" "));
// → Ничего не найдено
console.log(dominantDirection("Привет Мир, 2021 :)"));
// → ltr


