/**
 * Reverse a String Array
 * @param {*} s The input array of string.
 * @returns An array of reverses string
 */

//?Solution 1 : Using Building method

const reverseStringOne = (s) => s.reverse();

//? Solution 2 : Two-Pointer Approach

function reverseStringTwo(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Swap using destructuring
    [s[left], s[right]] = [s[right], s[left]];

    // const temp = s[left]
    // s[left] = s[right]
    // s[right] = temp

    left++;
    right--;
  }
  return s;
}

//? solution 3: For Loop with Swap

function reverseStringThree(s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let temp = s[i];

    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
  return s;
}

//? solution 4:  Using Recursion

function reverseStringFour(s, left = 0, right = s.length - 1) {
  if (left >= right) return;

  [s[left], s[right]] = [s[right], s[left]];

  reverseStringFour(s, left + 1, right - 1);
}

let s1 = ["a", "b", "c", "d", "e", "f"];
let s2 = ["a", "b", "c", "d", "e", "f"];
let s3 = ["a", "b", "c", "d", "e", "f"];
let s4 = ["a", "b", "c", "d", "e", "f"];

const resultOne = reverseStringOne(s1);
const resultTwo = reverseStringTwo(s2);
const resultThree = reverseStringThree(s3);
reverseStringFour(s4);

console.log("\n", resultOne, "\n", resultTwo, "\n", resultThree, "\n", s4);
