const findIndexOfMatchingBracket = require("./indexOfMatchingBracket");

const splitObjectByFirstComma = string => {
  if (string === "{}") return ["{}", "{}"];

  const indexOfColon = string.indexOf(":");
  const valueIsArray = string[indexOfColon + 1] === "[";

  let indexOfComma;
  if (valueIsArray) {
    const indexOfBraket = indexOfColon + 1;
    indexOfMatchingBracket = findIndexOfMatchingBracket(string.slice(indexOfBraket));
    indexOfComma = indexOfBraket + string.indexOf(",", indexOfMatchingBracket);
  } else {
    indexOfComma = string.indexOf(",");
  }

  if (indexOfComma === -1) return [string, "{}"];

  return [`${string.slice(0, indexOfComma)}}`, `{${string.slice(indexOfComma + 1)}`];
};

module.exports = splitObjectByFirstComma;
