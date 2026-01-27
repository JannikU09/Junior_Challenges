import { describe, it, expect } from "vitest";
import {
  reverseString,
  findMax,
  countVowels,
  isPalindrome,
  fizzBuzz,
  removeDuplicates,
  capitalizeWords,
  sumArray,
  findEvenNumbers,
  countOccurrences,
} from "./challenges";

describe("Challenge 1: reverseString", () => {
  it("should reverse a simple string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("should reverse a longer string", () => {
    expect(reverseString("JavaScript")).toBe("tpircSavaJ");
  });

  it("should return empty string for empty input", () => {
    expect(reverseString("")).toBe("");
  });

  it("should handle single character", () => {
    expect(reverseString("a")).toBe("a");
  });

  it("should handle string with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });
});

describe("Challenge 2: findMax", () => {
  it("should find the maximum in a positive array", () => {
    expect(findMax([1, 5, 3, 9, 2])).toBe(9);
  });

  it("should find the maximum in a negative array", () => {
    expect(findMax([-1, -5, -3])).toBe(-1);
  });

  it("should handle single element array", () => {
    expect(findMax([42])).toBe(42);
  });

  it("should handle array with duplicate max values", () => {
    expect(findMax([5, 9, 3, 9, 2])).toBe(9);
  });

  it("should handle mixed positive and negative numbers", () => {
    expect(findMax([-10, 0, 10, 5])).toBe(10);
  });
});

describe("Challenge 3: countVowels", () => {
  it("should count vowels in lowercase string", () => {
    expect(countVowels("hello")).toBe(2);
  });

  it("should count vowels in uppercase string", () => {
    expect(countVowels("AEIOU")).toBe(5);
  });

  it("should return 0 for string with no vowels", () => {
    expect(countVowels("xyz")).toBe(0);
  });

  it("should handle mixed case string", () => {
    expect(countVowels("Beautiful")).toBe(5);
  });

  it("should return 0 for empty string", () => {
    expect(countVowels("")).toBe(0);
  });
});

describe("Challenge 4: isPalindrome", () => {
  it("should return true for simple palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("should return false for non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  it("should handle palindrome with spaces and mixed case", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });

  it("should handle another complex palindrome", () => {
    expect(isPalindrome("Was it a car or a cat I saw")).toBe(true);
  });

  it("should return true for single character", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("should return true for empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });
});

describe("Challenge 5: fizzBuzz", () => {
  it("should return correct array for n=5", () => {
    expect(fizzBuzz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
  });

  it("should return FizzBuzz for multiples of 15", () => {
    const result = fizzBuzz(15);
    expect(result[14]).toBe("FizzBuzz");
  });

  it("should return correct full array for n=15", () => {
    expect(fizzBuzz(15)).toEqual([
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
    ]);
  });

  it("should handle n=1", () => {
    expect(fizzBuzz(1)).toEqual([1]);
  });

  it("should handle n=3", () => {
    expect(fizzBuzz(3)).toEqual([1, 2, "Fizz"]);
  });
});

describe("Challenge 6: removeDuplicates", () => {
  it("should remove duplicates from number array", () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should remove duplicates from string array", () => {
    expect(removeDuplicates(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
  });

  it("should handle array with all same elements", () => {
    expect(removeDuplicates([1, 1, 1])).toEqual([1]);
  });

  it("should return empty array for empty input", () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  it("should preserve order of first occurrence", () => {
    expect(removeDuplicates([3, 1, 2, 1, 3])).toEqual([3, 1, 2]);
  });
});

describe("Challenge 7: capitalizeWords", () => {
  it("should capitalize each word", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  it("should handle already capitalized letters", () => {
    expect(capitalizeWords("javaScript is fun")).toBe("JavaScript Is Fun");
  });

  it("should handle single character", () => {
    expect(capitalizeWords("a")).toBe("A");
  });

  it("should handle single word", () => {
    expect(capitalizeWords("hello")).toBe("Hello");
  });

  it("should handle empty string", () => {
    expect(capitalizeWords("")).toBe("");
  });
});

describe("Challenge 8: sumArray", () => {
  it("should sum positive numbers", () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
  });

  it("should handle negative numbers", () => {
    expect(sumArray([10, -5, 3])).toBe(8);
  });

  it("should return 0 for empty array", () => {
    expect(sumArray([])).toBe(0);
  });

  it("should handle single element", () => {
    expect(sumArray([42])).toBe(42);
  });

  it("should handle all negative numbers", () => {
    expect(sumArray([-1, -2, -3])).toBe(-6);
  });
});

describe("Challenge 9: findEvenNumbers", () => {
  it("should find even numbers in mixed array", () => {
    expect(findEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  it("should return empty array when no evens", () => {
    expect(findEvenNumbers([1, 3, 5])).toEqual([]);
  });

  it("should return all numbers when all are even", () => {
    expect(findEvenNumbers([2, 4, 6])).toEqual([2, 4, 6]);
  });

  it("should handle empty array", () => {
    expect(findEvenNumbers([])).toEqual([]);
  });

  it("should handle negative even numbers", () => {
    expect(findEvenNumbers([-2, -1, 0, 1, 2])).toEqual([-2, 0, 2]);
  });
});

describe("Challenge 10: countOccurrences", () => {
  it("should count string occurrences", () => {
    expect(countOccurrences(["a", "b", "a", "c", "b", "a"])).toEqual({
      a: 3,
      b: 2,
      c: 1,
    });
  });

  it("should count number occurrences", () => {
    expect(countOccurrences([1, 1, 2, 3, 3, 3])).toEqual({
      "1": 2,
      "2": 1,
      "3": 3,
    });
  });

  it("should return empty object for empty array", () => {
    expect(countOccurrences([])).toEqual({});
  });

  it("should handle single element", () => {
    expect(countOccurrences(["x"])).toEqual({ x: 1 });
  });

  it("should handle all unique elements", () => {
    expect(countOccurrences(["a", "b", "c"])).toEqual({ a: 1, b: 1, c: 1 });
  });
});
