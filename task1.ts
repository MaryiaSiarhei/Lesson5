// Написать функцию, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
console.log(sumNumbers(5.5));

function sumNumbers(num: number) {
  let result: number = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }
  if (!Number.isInteger(num)) {
    result += num - Math.floor(num);
  }
  return result;
}
