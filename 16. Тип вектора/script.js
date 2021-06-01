/*
  Напишите класс Vec, который представляет вектор в двумерном постранстве.
  Вектор принимает параметры x, y (числа) и сораняет их в свойства с тем же именем.
  Напишите для рпрототипа Vec два метода, plus и minus, которые принимают в качестве парамтра другой вектор,
  представляющий сумму или разность значения x и y для двух векторов (this и параметра).
  Добавьте в прототип свойство-геттер length, которое вычисляет длину вектора — расстроение от точки (x, y) до начала
  координат (0, 0)
*/

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    return new Vec(this.x += vec.x, this.y += vec.y)
  }

  minus(vec) {
    return new Vec(this.x -= vec.x, this.y -= vec.y)
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

