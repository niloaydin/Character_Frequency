function frequencyOfString(message) {
  const output = {};
  let arr = message.toLowerCase().split("");
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (output[word] === undefined) {
      output[word] = 1;
    } else {
      output[word] += 1;
    }
  }
  return output;
}

module.exports = frequencyOfString;
