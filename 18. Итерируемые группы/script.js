/*
  Сделайте класс Group из предыдущего упражнения итерируемым.
  Если для представления членов группы вы использовали массив, не возвращайте просто итератор, созданный путем вызова
  метода Symbol.iterator для массива. Это бы сработало, но оно не соответствует цели данного упражнения.
  Если ваш итератор ведет себя странно, когда группа изменяется во время итерации, — это нормально.
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

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.index = 0;
  }

  next() {
    if (this.index >= this.group.items.length) {
      return {done: true};
    } else {
      let result = {value: this.group.items[this.index],
                    done: false};
      this.index++;
      return result;
    }
  }
}


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

