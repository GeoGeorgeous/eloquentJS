/*
  Напишите класс с именем Group (поскольлму имя Set уже занято). Как и Set, он располагает методами add, delete и has.
  Его конструктор создаёт пустую группу, add добавляет в нее значение (но только если такого значения там еще нет),
  метод delete удаляет свой аргумент из группы (если таковой там был), а has возвращает логическое значение, указывающее,
  является ли его аргумент членом группы.
  Для того, чтобы определить, одинаковы ли два значения, используйте оператор === или какой-либо его эквивалент, например,
  indexOf.
  Присвойте классу статический метод from, который принимает в качестве аргумента итерируемый объект и создает группу, содержающую
  все значения, полученные посредством перебора.
*/

class Group {
  constructor() {
    this.items = [];
  }

  add(item) {
    if (!this.has(item)) {
      this.items.push(item);
    }
  }

  delete(item) {
    this.items = this.items.filter(v => v !== item);
  }

  has(item) {
    return this.items.includes(item);
  }

  static from(iterable) {
    let group = new Group;
    for (let item of iterable) {
      group.add(item);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.items)
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

