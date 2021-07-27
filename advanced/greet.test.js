const greet = require("./greet");

const RealDate = Date;

it("tests that with theese parameters the result should be: Heyho!", () => {
  global.Date.now = jest.fn(() => new Date("2021-01-01T08:00:00Z").getTime());
  expect(greet(20)).toBe("Heyho!");
  global.Date = RealDate;
});

// beforeEach(() => {
// 	jest.spyOn(Date.prototype, 'getDay').mockReturnValue(2);
// 	jest.spyOn(Date.prototype, 'toISOString').mockReturnValue('2000-01-01T00:00:00.000Z');
// });
// afterEach(() => {
// 	jest.restoreAll()
// });

// const getCurrentDate = () => new Date();
// test('It should create new date', () => {
//   jest
//     .spyOn(global, 'Date')
//     .mockImplementationOnce(() => new Date('2019-05-14T11:01:58.135Z'));
//   expect(getCurrentDate()).toEqual(new Date('2019-05-14T11:01:58.135Z'));
// });

// const RealDate = Date.now
// beforeAll(() => {
//   global.Date.now = jest.fn(() => new Date('2019-04-07T10:20:30Z').getTime())
// })
// afterAll(() => {
//   global.Date.now = RealDate
// })

// const RealDate = Date;
// beforeEach(() => {
//   global.Date.now = jest.fn(() => new Date('2019-04-22T10:20:30Z').getTime());
// });
// afterEach(() => {
//   global.Date = RealDate;
// });
