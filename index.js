function frequency(message) {
  if (typeof message === "string") {
    let output = {};
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
  if (Array.isArray(message) === true) {
    const map = {};
    message.forEach((item) => {
      if (map[item]) {
        map[item]++;
      } else {
        map[item] = 1;
      }
    });
    return map;
  }
}
