const indexOfMatchingBracket = require("./indexOfMatchingBracket");

const iomb = indexOfMatchingBracket;

describe("indexOfMatchingBracket()", () => {
  it("returns -1 on empty string", () => {
    expect(iomb("")).toBe(-1);
  });

  it("returns -1 if first character isn's [", () => {
    expect(iomb("1[]")).toBe(-1);
  });

  it("returns -1 when no matching bracket exist", () => {
    expect(iomb("[[[]]")).toBe(-1);
  });

  it("handles []", () => {
    expect(iomb("[]")).toBe(1);
  });

  it("handles [1, 2, 3]", () => {
    expect(iomb("[1, 2, 3]")).toBe(8);
  });

  it("handles [1, [2], 3]", () => {
    expect(iomb("[1, [2], 3]")).toBe(10);
  });
});
