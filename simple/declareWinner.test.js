const declareWinner = require("./declareWinner");

function fightTest(testDescription, fighter1, fighter2, firstAttacker, winner) {
  test(testDescription, () => {
    expect(declareWinner(fighter1, fighter2, firstAttacker)).toBe(winner);
  });
}

fightTest(
  "tests that with theese parameters the winner should be batman",
  { name: "batman", damagePerAttack: 10, health: 50 },
  { name: "superman", damagePerAttack: 15, health: 40 },
  "batman",
  "batman"
);
fightTest(
  "tests that with theese parameters the winner should be superman",
  { name: "batman", damagePerAttack: 5, health: 50 },
  { name: "superman", damagePerAttack: 15, health: 40 },
  "batman",
  "superman"
);
fightTest(
  "tests that with theese parameters the winner should be superman",
  { name: "batman", damagePerAttack: 10, health: 50 },
  { name: "superman", damagePerAttack: 15, health: 40 },
  "superman",
  "superman"
);
fightTest(
  "tests that with theese parameters the winner should be batman",
  { name: "batman", damagePerAttack: 10, health: 50 },
  { name: "superman", damagePerAttack: 5, health: 40 },
  "superman",
  "batman"
);
