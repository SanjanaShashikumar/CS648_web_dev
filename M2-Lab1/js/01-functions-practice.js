"use strict";

/**
 * halfNumber(number)
 * - divides by 2
 * - logs: "Half of 5 is 2.5."
 * - returns the result
 */
function halfNumber(num) {
  const result = num / 2;
  console.log(`Half of ${num} is ${result}.`);
  return result;
}

/**
 * squareNumber(number)
 * - squares the number
 * - logs: "The result of squaring the number 3 is 9."
 * - returns the result
 */
function squareNumber(num) {
  const result = num * num;
  console.log(`The result of squaring the number ${num} is ${result}.`);
  return result;
}

/**
 * percentOf(a, b)
 * - finds what percent a is of b
 * - logs: "2 is 50% of 4."
 * - returns the percent (number)
 */
function percentOf(num1, num2) {
  // Guard against divide-by-zero
  if (num2 === 0) {
    console.log(`Cannot calculate percent: ${num1} is undefined% of 0.`);
    return NaN;
  }

  const percent = (num1 / num2) * 100;

  // Clean display: avoid long repeating decimals in the log
  const displayPercent = Number.isInteger(percent) ? percent : percent.toFixed(2);

  console.log(`${num1} is ${displayPercent}% of ${num2}.`);
  return percent;
}

/**
 * findModulus(a, b)
 * - returns a % b
 * - logs: "2 is the modulus of 4 and 10."
 *   (Meaning: 4 % 10 = 4, 10 % 4 = 2 — many assignments mean "a is the modulus of b and c"
 *    as "b % c". We'll follow the instruction: modulus of first and second parameters.)
 */
function findModulus(num1, num2) {
  const result = num1 % num2;
  console.log(`${result} is the modulus of ${num1} and ${num2}.`);
  return result;
}

// ---- Quick test calls (optional) ----
halfNumber(5);
squareNumber(3);
percentOf(2, 4);
findModulus(4, 10);
