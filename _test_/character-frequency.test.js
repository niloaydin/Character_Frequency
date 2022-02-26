const frequency = require("../index");

it("Should get the frequency of the element in an array", () => {
  const freqOfString2 = frequency([1, 1, 2, 3, 3, 3, 4]);
  expect(freqOfString2).toEqual({ 1: 2, 2: 1, 3: 3, 4: 1 });
});

it("Should get the frequency of the stringed elements in an array", () => {
  const freqOfString3 = frequency(["hi", "how", "are", "you", "?"]);
  expect(freqOfString3).toEqual({ hi: 1, how: 1, are: 1, you: 1, "?": 1 });
});
