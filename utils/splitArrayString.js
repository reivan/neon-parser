const findIndexOfMatchingBracket = require("./indexOfMatchingBracket");

const splitArrayString = string => {
  const stringWithoutBrackets = string
    .substring(0, string.length - 1)
    .substring(1);

  if (stringWithoutBrackets === "") return [];

  const startsWithANumber = /^\d/.test(stringWithoutBrackets);
  const startsWithASring = stringWithoutBrackets[0] === `"`;

  if (startsWithANumber || startsWithASring) {
    const indexOfComma = stringWithoutBrackets.indexOf(",");

    if (indexOfComma === -1) return [stringWithoutBrackets];

    return [
      stringWithoutBrackets.substring(0, indexOfComma),
      ...splitArrayString(
        `[${stringWithoutBrackets.substring(indexOfComma + 1)}]`
      )
    ];
  }

  const startsWithABracket = stringWithoutBrackets[0] === "[";

  if (startsWithABracket) {
    const indexOfMatchingBracket = findIndexOfMatchingBracket(
      stringWithoutBrackets
    );

    const beforeMatchingBracket = stringWithoutBrackets.substring(
      0,
      indexOfMatchingBracket + 1
    );
    const afterMatchingBracket = stringWithoutBrackets.substring(
      indexOfMatchingBracket + 1
    );

    if (!afterMatchingBracket) return [stringWithoutBrackets];

    return [
      beforeMatchingBracket,
      ...splitArrayString(`[${afterMatchingBracket.substring(1)}]`)
    ];
  }
};

module.exports = splitArrayString;
