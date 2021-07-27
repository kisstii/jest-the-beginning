const findUnique = require("./findUnique");

function findUniqueTest(testDescription, number1, number2, number3, unique) {
  test(testDescription, () => {
    expect(findUnique([number1, number2, number3])).toBe(unique);
  });
}

findUniqueTest("tests that with theese parameters the unique should be the 3", 1, 2, 3, 2);
findUniqueTest("tests that with theese parameters the unique should be the 2", 1, 1, 2, 2);
findUniqueTest("tests that with theese parameters the unique should be the 1", 1, 2, 2, 1);
findUniqueTest("tests that with theese parameters the unique should be the undefined", 1, 1, 1, undefined);
