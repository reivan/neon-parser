const neon = require("../neonParser");

describe("neonParser()", () => {
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

  describe("objects", () => {
    it("parses {}", () => {
      expect(neon("{}")).toEqual({});
    });

    it('parses {"protonMass": "1.67e-27"}', () => {
      expect(neon('{"protonMass": "1.67e-27"}')).toEqual({ protonMass: "1.67e-27" });
    });
  });
});
