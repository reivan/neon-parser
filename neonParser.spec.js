const splitArrayString = require("./splitArrayString");

const regex = {
  number: /^[.\d]+$/,
  string: /^\"/,
  array: /^\[/
};

const neon = string => {
  if (regex.number.test(string)) {
    return +string;
  }

  if (regex.string.test(string)) {
    return string.replace(/\"/g, "");
  }

  if (regex.array.test(string)) {
    return splitArrayString(string).map(neon);
  }
};

describe("neon()", () => {
  it("parses integers", () => {
    const expected = 99;
    const actual = neon("99");

    expect(actual).toBe(expected);
  });

  it("parses floats", () => {
    const expected = 1.44;
    const actual = neon("1.44");

    expect(actual).toBe(expected);
  });

  it("parses strings", () => {
    const expected = "sdf";
    const actual = neon('"sdf"');

    expect(actual).toBe(expected);
  });

  describe("arrays", () => {
    it("parses []", () => {
      const expected = [];
      const actual = neon("[]");

      expect(actual).toEqual(expected);
    });

    it("parses [99]", () => {
      const expected = [99];
      const actual = neon("[99]");

      expect(actual).toEqual(expected);
    });

    it("parses [[]]", () => {
      const expected = [[]];
      const actual = neon("[[]]");

      expect(actual).toEqual(expected);
    });

    it("parses arrays", () => {
      const expected = [1, 2, 3];
      const actual = neon("[1,2,3]");

      expect(actual).toEqual(expected);
    });

    it(`parses [[1,2,3],"sdf",5]`, () => {
      expect(neon('[[1,2,3],"sdf",5]')).toEqual([[1, 2, 3], "sdf", 5]);
    });
  });
});
