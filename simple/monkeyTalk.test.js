const monkeyTalk = require("./monkeyTalk");

function monkeyTalkTest(testDescription, phrase, result) {
  test(testDescription, () => {
    expect(monkeyTalk(phrase)).toBe(result);
  });
}

monkeyTalkTest("tests that with theese parameters monkey should be say: Ook eek eek.", "what is it?", "Ook eek eek.");
monkeyTalkTest("tests that with theese parameters monkey should be say: Ook ook ook ook ook.", "who can speek monkey language?", "Ook ook ook ook ook.");
