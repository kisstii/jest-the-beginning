const gps = require("./gps");

function gpsTest(testDescription, seconds, distancesFromOrigin, result) {
  test(testDescription, () => {
    expect(gps(seconds, distancesFromOrigin)).toBe(result);
  });
}

gpsTest("tests that with theese parameters the max speed should be 45", 80, [1, 2, 3, 4, 5, 6], 45);
gpsTest("tests that with theese parameters the max speed should be 120", 30, [1, 2, 3, 4, 5, 6], 120);
gpsTest("tests that with theese parameters the max speed should be 24", 150, [1, 2, 3, 4, 5, 6], 24);
gpsTest("tests that with theese parameters the max speed should be 216", 100, [1, 3, 6, 10, 15, 21], 216);
