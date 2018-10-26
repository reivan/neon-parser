const regex = {
  number: /^[.\d]+$/,
  string: /^\"/,
  array: /^\[/,
  object: /^\{/,
}

const neon = string => {
  if (regex.number.test(string)) {
    return +string
  }

  if (regex.string.test(string)) {
    return string.replace(/\"/g, '')
  }

  if (regex.array.test(string)) {
    return string
      .replace(/^\[/, '')
      .replace(/\]$/, '')
      .split(',')
      .map(neon)
  }

  if (regex.object.test(string)) {
    return {}
    // return string
    //   .replace(/[\{\}]/g, '')
      // .split(',')
      // .map(neon)
  }
};

describe('neon()', () => {
  it('parses integers', () => {
    const expected = 99;
    const actual = neon('99');

    expect(actual).toBe(expected)
  })

  it('parses floats', () => {
    const expected = 1.44;
    const actual = neon('1.44');

    expect(actual).toBe(expected)
  })

  it('parses strings', () => {
    const expected = 'sdf';
    const actual = neon('"sdf"');

    expect(actual).toBe(expected)
  })

  it('parses arrays with JSONs in it', () => {
    const expected = [[1, 2, 3], "sdf", 5];
    const actual = neon('[[1,2,3],"sdf",5]');

    expect(actual).toEqual(expected)
  })
});
