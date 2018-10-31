const splitArrayString = require("./splitArrayString");

describe("splitArrayString()", () => {
  it("splits []", () => {
    expect(splitArrayString("[]")).toEqual([]);
  });

  it("handles [[]]", () => {
    expect(splitArrayString("[[]]")).toEqual(["[]"]);
  });

  it("splits [99]", () => {
    expect(splitArrayString("[99]")).toEqual(["99"]);
  });

  it("splits [99,99]", () => {
    expect(splitArrayString("[99,99]")).toEqual(["99", "99"]);
  });

  it("handles [[1], 33]", () => {
    expect(splitArrayString("[[1],33]")).toEqual(["[1]", "33"]);
  });

  it("splits [99,[99]]", () => {
    expect(splitArrayString("[99,[99]]")).toEqual(["99", "[99]"]);
  });
});
