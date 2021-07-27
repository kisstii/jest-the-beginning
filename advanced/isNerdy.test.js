const isNerdy = require("./isNerdy");

it("tests that categories include nerdy when type is equal to success", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          type: "success",
          value: {
            id: 20,
            joke: "The Chuck Norris military unit was not used in the game Civilization 4, because a single Chuck Norris could defeat the entire combined nations of the world in one turn.",
            categories: ["nerdy"],
          },
        }),
    })
  );
  const result = await isNerdy(20);
  expect(result).toBe(true);
});

it("tests that it returns null when type is NoSuchQuoteException", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          type: "NoSuchQuoteException",
          value: "No quote with id=22.",
        }),
    })
  );
  const result = await isNerdy(22);
  expect(result).toBe(null);
});

it("tests that it returns Unknown type when type is other than NoSuchQuoteException or success", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          type: "Else type",
          value: "Nothing",
        }),
    })
  );
  console.log = jest.fn();
  const result = await isNerdy(404);
  expect(result).toBe(null);
  expect(console.log).toHaveBeenCalledWith("Unknown type");
  expect(console.log).toHaveBeenCalledWith("Else type");
});
