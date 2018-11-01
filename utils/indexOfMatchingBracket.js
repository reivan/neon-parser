const indexOfMatchingBracket = string => {
  if (!string) return -1;
  if (string[0] !== "[") return -1;

  let nestingLevel = 0;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char === "]") {
      if (nestingLevel === 0) return i;

      nestingLevel -= 1;
    }

    if (char === "[" && i !== 0) {
      nestingLevel += 1;
    }
  }

  return -1;
};

module.exports = indexOfMatchingBracket;
