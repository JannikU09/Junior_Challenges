/**
 * JavaScript/TypeScript Challenges for Junior Developers
 *
 * Instructions:
 * 1. Each function has a description explaining what it should do
 * 2. Implement the function body to pass the tests
 * 3. Run tests with: npm test
 * 4. All tests should pass when your implementations are correct
 */

// ============================================================================
// CHALLENGE 1: Reverse a String
// ============================================================================
/**
 * Reverses a given string.
 *
 * Example:
 *   reverseString("hello") => "olleh"
 *   reverseString("JavaScript") => "tpircSavaJ"
 *   reverseString("") => ""
 *
 * Hint: You can use split(), reverse(), and join() methods,
 * or loop through the string backwards.
 *
 * @param str - The string to reverse
 * @returns The reversed string
 */
export function reverseString(str: string): string {

  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  };

  return result;

  // TODO: Implement this function
}

// ============================================================================
// CHALLENGE 2: Find the Maximum Number
// ============================================================================
/**
 * Finds the largest number in an array of numbers.
 *
 * Example:
 *   findMax([1, 5, 3, 9, 2]) => 9
 *   findMax([-1, -5, -3]) => -1
 *   findMax([42]) => 42
 *
 * Hint: You can use Math.max() with spread operator,
 * or loop through the array keeping track of the maximum.
 *
 * @param numbers - Array of numbers
 * @returns The largest number in the array
 */
export function findMax(numbers: number[]): number {

  let max = numbers[0];

  for (let i = 1; i <= numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    };
  };

  return max;

  // TODO: Implement this function
}

// ============================================================================
// CHALLENGE 3: Count Vowels
// ============================================================================
/**
 * Counts the number of vowels (a, e, i, o, u) in a string.
 * The count should be case-insensitive.
 *
 * Example:
 *   countVowels("hello") => 2
 *   countVowels("AEIOU") => 5
 *   countVowels("xyz") => 0
 *   countVowels("Beautiful") => 5
 *
 * Hint: Convert to lowercase first, then check each character
 * against the vowels "aeiou".
 *
 * @param str - The input string
 * @returns The count of vowels
 */
export function countVowels(str: string): number {

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "A" || str[i] === "e" || str[i] === "E" || str[i] === "i" || str[i] === "I" || str[i] === "o" || str[i] === "O" || str[i] === "u" || str[i] === "U") {
      count++;
    };
  };

  return count;

  // TODO: Implement this function
}

// ============================================================================
// CHALLENGE 4: Check if Palindrome
// ============================================================================
/**
 * Checks if a string is a palindrome (reads the same forwards and backwards).
 * The check should be case-insensitive and ignore spaces.
 *
 * Example:
 *   isPalindrome("racecar") => true
 *   isPalindrome("hello") => false
 *   isPalindrome("A man a plan a canal Panama") => true
 *   isPalindrome("Was it a car or a cat I saw") => true
 *
 * Hint: Remove spaces, convert to lowercase, then compare
 * with the reversed version.
 *
 * @param str - The string to check
 * @returns True if palindrome, false otherwise
 */
export function isPalindrome(str: string): boolean {

  const withoutSpaces = str.replace(/ /gi, "").toLowerCase();

  for (let i = 0; i < withoutSpaces.length / 2; i++) {
    if (withoutSpaces[i] !== withoutSpaces[withoutSpaces.length - 1 - i]) {
      return false;
    };
  };

  return true;

  // TODO: Implement this function
}

// ============================================================================
// CHALLENGE 5: FizzBuzz
// ============================================================================
/**
 * Returns an array of numbers from 1 to n, but:
 * - For multiples of 3, use "Fizz" instead of the number
 * - For multiples of 5, use "Buzz" instead of the number
 * - For multiples of both 3 and 5, use "FizzBuzz"
 *
 * Example:
 *   fizzBuzz(5) => [1, 2, "Fizz", 4, "Buzz"]
 *   fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * Hint: Use the modulo operator (%) to check divisibility.
 * Check for divisibility by both 3 AND 5 first!
 *
 * @param n - The upper limit (inclusive)
 * @returns Array of numbers and fizzbuzz strings
 */
export function fizzBuzz(n: number): (number | string)[] {

  const arr: (number | string)[] = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  };

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr[i - 1] = "FizzBuzz";
    } else if (i % 3 == 0) {
      arr[i - 1] = "Fizz";
    } else if (i % 5 == 0) {
      arr[i - 1] = "Buzz";
    };
  };

  return arr;

  // TODO: Implement this function
}

// ============================================================================
// CHALLENGE 6: Remove Duplicates
// ============================================================================
/**
 * Removes duplicate values from an array, keeping only unique elements.
 * The order of first occurrence should be preserved.
 *
 * Example:
 *   removeDuplicates([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
 *   removeDuplicates(["a", "b", "a", "c"]) => ["a", "b", "c"]
 *   removeDuplicates([1, 1, 1]) => [1]
 *
 * Hint: You can use Set, or filter with indexOf.
 *
 * @param arr - Array with possible duplicates
 * @returns Array with duplicates removed
 */
export function removeDuplicates<T>(arr: T[]): T[] {

  const withoutDuplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (withoutDuplicates.indexOf(arr[i]) === -1) {
      withoutDuplicates.push(arr[i]);
    };
  };

  return withoutDuplicates;

  // TODO: Implement this function
}

// ============================================================================
// CHALLENGE 7: Capitalize Words
// ============================================================================
/**
 * Capitalizes the first letter of each word in a string.
 *
 * Example:
 *   capitalizeWords("hello world") => "Hello World"
 *   capitalizeWords("javaScript is fun") => "JavaScript Is Fun"
 *   capitalizeWords("a") => "A"
 *
 * Hint: Split by spaces, capitalize each word, then join back.
 *
 * @param str - The input string
 * @returns String with capitalized words
 */
export function capitalizeWords(str: string): string {

  const capitalizedWords = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return capitalizedWords;


  // TODO: Implement this function
}

// ============================================================================
// CHALLENGE 8: Sum of Array
// ============================================================================
/**
 * Calculates the sum of all numbers in an array.
 *
 * Example:
 *   sumArray([1, 2, 3, 4, 5]) => 15
 *   sumArray([10, -5, 3]) => 8
 *   sumArray([]) => 0
 *
 * Hint: Use reduce() or a simple for loop.
 *
 * @param numbers - Array of numbers
 * @returns The sum of all numbers
 */
export function sumArray(numbers: number[]): number {

  var currentValue = 0;

  for (const num of numbers) {
    currentValue += num;
  };

  return currentValue;


  // TODO: Implement this function
}

// ============================================================================
// CHALLENGE 9: Find Even Numbers
// ============================================================================
/**
 * Returns a new array containing only the even numbers from the input array.
 *
 * Example:
 *   findEvenNumbers([1, 2, 3, 4, 5, 6]) => [2, 4, 6]
 *   findEvenNumbers([1, 3, 5]) => []
 *   findEvenNumbers([2, 4, 6]) => [2, 4, 6]
 *
 * Hint: Use filter() with modulo operator.
 *
 * @param numbers - Array of numbers
 * @returns Array containing only even numbers
 */
export function findEvenNumbers(numbers: number[]): number[] {

  const evenNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    };
  };

  return evenNumbers;

  // TODO: Implement this function
}

// ============================================================================
// CHALLENGE 10: Object Key Counter
// ============================================================================
/**
 * Counts how many times each element appears in an array
 * and returns an object with elements as keys and counts as values.
 *
 * Example:
 *   countOccurrences(["a", "b", "a", "c", "b", "a"]) => { a: 3, b: 2, c: 1 }
 *   countOccurrences([1, 1, 2, 3, 3, 3]) => { "1": 2, "2": 1, "3": 3 }
 *   countOccurrences([]) => {}
 *
 * Hint: Loop through the array and use an object to track counts.
 *
 * @param arr - Array of elements
 * @returns Object with element counts
 */
export function countOccurrences<T extends string | number>(
  arr: T[],
): Record<string, number> {

  const counts = {} as Record<T, number>;

  for (const item of arr) {
    counts[item] = counts[item] ? counts[item] += 1 : 1;
  };

  return counts;

  // TODO: Implement this function
}

// ============================================================================
// CHALLENGE 11: Find the Average
// ============================================================================
/**
 * Finds the average in an array of numbers.
 *
 * Example:
 *   findAverage([1, 5, 3, 9, 2]) => 4
 *   findAverage([-1, -5, -3]) => -3
 *   findAverage([42]) => 42
 *
 * @param numbers - Array of numbers
 * @returns The largest number in the array
 */
export function findAverage(numbers: number[]): number {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  };
  const avg = sum / numbers.length;

  return avg;

  // TODO: Implement this function
}
