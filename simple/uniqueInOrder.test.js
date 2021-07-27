const uniqueInOrder = require("./uniqueInOrder");

function uniqueInOrderTest(testDescription, iterable, result) {
  test(testDescription, () => {
    expect(uniqueInOrder(iterable)).toStrictEqual(result);
  });
}

uniqueInOrderTest("tests that with theese parameters the result should be: [1, 2, 3, 2, 1]", [1, 1, 2, 3, 3, 2, 1], [1, 2, 3, 2, 1]);
uniqueInOrderTest("tests that with theese parameters the result should be: []", [], []);
