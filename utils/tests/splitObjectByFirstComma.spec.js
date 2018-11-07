const splitObjectByFirstComma = require("../splitObjectByFirstComma");

describe("splitObjectByFirtComma()", () => {
  it("splits {}", () => {
    expect(splitObjectByFirstComma("{}")).toEqual(["{}", "{}"]);
  });

  it('splits {"a":1}', () => {
    expect(splitObjectByFirstComma('{"a":1}')).toEqual(['{"a":1}', "{}"]);
  });

  it('splits {"a":1,"b":2}', () => {
    expect(splitObjectByFirstComma('{"a":1,"b":2}')).toEqual(['{"a":1}', '{"b":2}']);
  });

  it('splits {"a":[1,2,3],"b":2}', () => {
    expect(splitObjectByFirstComma('{"a":[1,2,3],"b":2}')).toEqual(['{"a":[1,2,3]}', '{"b":2}']);
  });

  it('splits {"a":[1,2,3],"b":2,"c":3}', () => {
    const expected = ['{"a":[1,2,3]}', '{"b":2,"c":3}'];
    expect(splitObjectByFirstComma('{"a":[1,2,3],"b":2,"c":3}')).toEqual(expected);
  });
});
