function frequencyOfArray(message) {
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
  } else {
    throw new Error("You need to pass an array");
  }
}

module.exports = frequencyOfArray;
