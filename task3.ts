// Напишите функцию, которая при каждом вызове будет выводит увеличенный счетчик на 1

// Пример:
const counter = createCounter(10);
const counter2 = createCounter(5);

console.log(counter()); // 11
console.log(counter()); // 12

console.log(counter2()); // 6
console.log(counter2()); // 7

function createCounter(n: number) {
  let new_n = n;
  return () => {
    new_n += 1;
    return new_n;
  };
}
