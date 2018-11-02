const parse = require("../parseSingleKeyObject");

describe("parseSingleKeyObject()", () => {
  it('handles {"earthMass":"5,97E24"}', () => {
    expect(parse('{"earthMass":"5,97E24"}')).toEqual(["earthMass", '"5,97E24"']);
  });

  it('handles {"number":100}', () => {
    expect(parse('{"number":100}')).toEqual(["number", "100"]);
  });
});
