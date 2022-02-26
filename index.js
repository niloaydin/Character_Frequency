function frequency(message) {
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

console.log(frequency([12234234234, 24423423, 2342342]));

module.exports = frequency;
