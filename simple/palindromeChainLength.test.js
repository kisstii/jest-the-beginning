const palindromeChainLength = require("./palindromeChainLength");

function palindromeChainLengthTest(testDescription, number, result) {
  test(testDescription, () => {
    expect(palindromeChainLength(number)).toBe(result);
  });
}

palindromeChainLengthTest("tests that with theese parameters the result should be 1", 345, 1);
palindromeChainLengthTest("tests that with theese parameters the result should be 0", 12321, 0);
palindromeChainLengthTest("tests that with theese parameters the result should be 5", -1035, 5);
