const frequencyOfArray = require("../index");

it("Should get the frequency of the element in an array", () => {
  const freqOfArray2 = frequencyOfArray([1, 1, 2, 3, 3, 3, 4]);
  expect(freqOfArray2).toEqual({ 4: 1, 1: 2, 2: 1, 3: 3 });
});

it("Should get the frequency of the stringed elements in an array", () => {
  const freqOfArray3 = frequencyOfArray(["hi", "how", "are", "you", "?"]);
  expect(freqOfArray3).toEqual({ hi: 1, how: 1, are: 1, you: 1, "?": 1 });
});

it("Should get the frequency of the stringed elements in an array", () => {
  const freqOfArray4 = frequencyOfArray(["hi how are you?"]);
  expect(freqOfArray4).toEqual({ "hi how are you?": 1 });
});

it("Should throw an error when it's not given an array", () => {
  const freqOfArray5 = frequencyOfArray(1234);
  expect(() => {
    freqOfArray5;
  }).toThrow(new Error("You need to pass an array"));
});

it("Should throw an error when it's not given a parameter", () => {
  const freqOfArray6 = frequencyOfArray();
  expect(() => {
    freqOfArray6;
  }).toThrow(new Error("You need to pass an array"));
});
