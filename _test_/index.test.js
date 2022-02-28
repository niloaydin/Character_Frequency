const { frequencyOfArray, frequencyOfString } = require("../index");

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
  const hello = null;
  expect(() => {
    frequencyOfArray(hello);
  }).toThrow(new Error("You need to pass an array"));
});

it("Should throw an error when it's not given a parameter", () => {
  expect(() => {
    frequencyOfArray();
  }).toThrow(new Error("You need to pass an array"));
});

it("Should get the frequency of the element of the string", () => {
  const freqOfString2 = frequencyOfString("banana");
  expect(freqOfString2).toEqual({ b: 1, a: 3, n: 2 });
});

it("Should get the frequency of the element of the string", () => {
  const freqOfString3 = frequencyOfString("banana");
  expect(freqOfString3).toEqual({ a: 3, n: 2, b: 1 });
});

it("Should get the frequency of the element of the string", () => {
  const freqOfString4 = frequencyOfString("112223333");
  expect(freqOfString4).toEqual({ 1: 2, 2: 3, 3: 4 });
});

it("Should get the frequency of the spaces and speacial characters of the string", () => {
  const freqOfString5 = frequencyOfString("hello, ** ()  ");
  expect(freqOfString5).toEqual({
    h: 1,
    e: 1,
    l: 2,
    o: 1,
    ",": 1,
    " ": 4,
    "*": 2,
    "(": 1,
    ")": 1,
  });
});

it("Should get the frequency of the element of the string and should be case insensitive", () => {
  const freqOfString6 = frequencyOfString("BaNanA");
  expect(freqOfString6).toEqual({ b: 1, a: 3, n: 2 });
});

it("Should throw an error when the parameter is not a string", () => {
  const hello = null;
  expect(() => {
    frequencyOfString(hello);
  }).toThrow(Error);
});

it("Should throw an error when no parameter is passed", () => {
  expect(() => {
    frequencyOfString();
  }).toThrow(Error);
});
