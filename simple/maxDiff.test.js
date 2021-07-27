const maxDiff = require("./maxDiff");

function maxDiffTest(testDescription, list, diff) {
  test(testDescription, () => {
    expect(maxDiff(list)).toBe(diff);
  });
}

maxDiffTest("tests that with theese parameters the max difference should be 74", [50, 3, 37, 77, 15, 22], 74);
maxDiffTest("tests that with theese parameters the max difference should be 90", [-30, 60, 40, 20, -10, 40], 90);
maxDiffTest("tests that with theese parameters the max difference should be 0", [0], 0);
maxDiffTest("tests that with theese parameters the max difference should be 0", [], 0);
