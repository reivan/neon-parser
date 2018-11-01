const splitArrayString = require("./utils/splitArrayString");

const regex = {
  number: /^[.\d]+$/,
  string: /^\"/,
  array: /^\[/
};

const neonParser = string => {
  if (regex.number.test(string)) {
    return +string;
  }

  if (regex.string.test(string)) {
    return string.replace(/\"/g, "");
  }

  if (regex.array.test(string)) {
    return splitArrayString(string).map(neonParser);
  }
};

module.exports = neonParser;
