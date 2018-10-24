import { describe } from "riteway";

const regex = {
  number: /^[.\d]+$/,
  string: /^\"/,
  array: /^\[/,
  object: /^\{/,
}

// const neon = JSON.parse;
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

describe("neon()", async assert => {
  assert({
    given: '"99"',
    should: "return 99",
    actual: neon("99"),
    expected: 99
  });

  assert({
    given: '"1.44"',
    should: "return 1.44",
    actual: neon("1.44"),
    expected: 1.44
  });

  assert({
    given: '"sdf"',
    should: 'return "sdf"',
    actual: neon('"sdf"'),
    expected: "sdf"
  });

  assert({
    given: "[1,2,3,4,5]",
    should: "return [1, 2, 3, 4, 5]",
    actual: neon("[1,2,3,4,5]"),
    expected: [1, 2, 3, 4, 5]
  });

  // assert({
  //   given: `[[1,2,3],"sdf",5]`,
  //   should: "return `[[1,2,3],'sdf',5]`",
  //   actual: neon(`[[1,2,3],"sdf",5]`),
  //   expected: [[1, 2, 3], "sdf", 5]
  // });

  assert({
    given: `{}`,
    should: "return {}",
    actual: neon(`{}`),
    expected: {}
  });

  // assert({
  //   given: `{"name": "JC"}`,
  //   should: 'return `{"name": "JC"}`',
  //   actual: neon(`{"name": "JC"}`),
  //   expected: { name: "JC" }
  // });

  // const sampleJSON = {
  //   name: "John Smith",
  //   sku: "20223",
  //   price: 23.95,
  //   shipTo: {
  //     name: "Jane Smith",
  //     address: "123 Maple Street",
  //     city: "Pretendville",
  //     state: "NY",
  //     zip: "12345"
  //   },
  //   billTo: {
  //     name: "John Smith",
  //     address: "123 Maple Street",
  //     city: "Pretendville",
  //     state: "NY",
  //     zip: "12345"
  //   },
  //   items: [1, 2, 3, 4, 5]
  // };

  // assert({
  //   given: "sampleJSON",
  //   should: 'return parsed sampleJSON',
  //   actual: neon(JSON.stringify(sampleJSON)),
  //   expected: sampleJSON
  // });
});
