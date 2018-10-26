const splitArrayString = string => {
  const stringWithoutBrackets = string.replace(/^\[/, "").replace(/\]$/, "");

  if (stringWithoutBrackets === "") return [];

  const startsWithANumber = /^\d/.test(stringWithoutBrackets);

  if (startsWithANumber) {
    const indexOfComma = stringWithoutBrackets.indexOf(",");

    if (indexOfComma === -1) return [stringWithoutBrackets];

    return [
      stringWithoutBrackets.substring(0, indexOfComma),
      ...splitArrayString(stringWithoutBrackets.substring(indexOfComma + 1))
    ];
  }
};

describe("splitArrayString()", () => {
  it("splits []", () => {
    const expected = [];
    const actual = splitArrayString("[]");

    expect(actual).toEqual(expected);
  });

  it("splits [99]", () => {
    const expected = ["99"];
    const actual = splitArrayString("[99]");

    expect(actual).toEqual(expected);
  });

  it("splits [99,99]", () => {
    const expected = ["99", "99"];
    const actual = splitArrayString("[99,99]");

    expect(actual).toEqual(expected);
  });
});
