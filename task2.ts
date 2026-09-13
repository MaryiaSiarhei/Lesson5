// Напишите самовызывающиеся функцию подсчета факториала числа: число должно передаваться как параметр функции
const result = (function countFactorial(n: bigint): bigint | void {
  if (n < 0n) {
    console.error("Must be above 0");
    return;
  }
  if (n <= 1n) return 1n;
  return n * (countFactorial(n - 1n) ?? 1n);
})(4n);
console.log(result);
