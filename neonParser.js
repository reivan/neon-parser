const splitArrayString = require("./utils/splitArrayString");
const parseSingleKeyObject = require("./utils/parseSingleKeyObject");

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

  const startsWithCurly = string[0] === "{";
  if (startsWithCurly) {
    if (string === "{}") return {};

    const [key, valueString] = parseSingleKeyObject(string);
    return { [key]: neonParser(valueString) };
  }
};

module.exports = neonParser;
