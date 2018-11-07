const splitArrayString = require("./utils/splitArrayString");
const parseSingleKeyObject = require("./utils/parseSingleKeyObject");
const splitObjectByFirstComma = require("./utils/splitObjectByFirstComma");

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

    const [head, tail] = splitObjectByFirstComma(string);
    const [key, valueString] = parseSingleKeyObject(head);
    return { [key]: neonParser(valueString), ...neonParser(tail) };
  }
};

module.exports = neonParser;
