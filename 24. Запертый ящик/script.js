/*
  Это ящик с замком. В ящике есть массив, но его можно получить, только если отпереть ящик.
  Прямой доступ к частному свойству _content запрещён.

  Напишите функцию withBoxUnlocked, которая принимает в качестве аргумента функциональнное значение,
  отпирает ящик, запускает функцию, а затем гаранитрует, что прежде,
  чем завершить работу, ящик снова будет заперт независимо от того,
  возвратила функция-аргумент нормальный результат или вызвала исключение.

  Если хотите заработать дополнительные баллы, убедитесь, что при вызове withBoxUnlocked, когда ящик уже открыт,
  он остается открытым.
*/

const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  if (!box.locked) {
    return body();
  }

  box.unlock()

  try {
    return body()
  } catch (error) {
    console.log('Ошибка:', error)
  } finally {
    box.lock()
  }
}
withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true

