const greet = require("./greet");

console.log = jest.fn();

afterEach(() => {
  jest.useRealTimers();
  jest.clearAllMocks();
});

it("tests that with theese parameters the result should be: Heyho!", () => {
  jest.useFakeTimers("modern").setSystemTime(new Date("2021-01-01T06:00").getTime());
  greet(20);
  expect(console.log).toHaveBeenCalledWith("Heyho!");
});

it("tests that with theese parameters the result should be: Hello...", () => {
  jest.useFakeTimers("modern").setSystemTime(new Date("2021-01-01T20:00").getTime());
  greet(20);
  expect(console.log).toHaveBeenCalledWith("Hello...");
});

it("tests that with theese parameters the result should be: Good morning", () => {
  jest.useFakeTimers("modern").setSystemTime(new Date("2021-01-01T06:00").getTime());
  greet(40);
  expect(console.log).toHaveBeenCalledWith("Good morning");
});

it("tests that with theese parameters the result should be: Good evening", () => {
  jest.useFakeTimers("modern").setSystemTime(new Date("2021-01-01T20:00").getTime());
  greet(40);
  expect(console.log).toHaveBeenCalledWith("Good evening");
});

it("tests that with theese parameters the result should be: Hi", () => {
  jest.useFakeTimers("modern").setSystemTime(new Date("2021-01-01T12:00").getTime());
  greet(20);
  expect(console.log).toHaveBeenCalledWith("Hi");
});

it("tests that with theese parameters the result should be: Good day", () => {
  jest.useFakeTimers("modern").setSystemTime(new Date("2021-01-01T12:00").getTime());
  greet(40);
  expect(console.log).toHaveBeenCalledWith("Good day");
});
