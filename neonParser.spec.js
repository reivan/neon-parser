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
    expect(neon("99")).toBe(99);
  });

  it("parses floats", () => {
    expect(neon("1.44")).toBe(1.44);
  });

  it("parses strings", () => {
    expect(neon('"sdf"')).toBe("sdf");
  });

  describe("arrays", () => {
    it("parses []", () => {
      expect(neon("[]")).toEqual([]);
    });

    it("parses [99]", () => {
      expect(neon("[99]")).toEqual([99]);
    });

    it("parses [[]]", () => {
      expect(neon("[[]]")).toEqual([[]]);
    });

    it("parses arrays", () => {
      expect(neon("[1,2,3]")).toEqual([1, 2, 3]);
    });

    it(`parses [[1,2,3],"sdf",5]`, () => {
      expect(neon('[[1,2,3],"sdf",5]')).toEqual([[1, 2, 3], "sdf", 5]);
    });
  });
});
