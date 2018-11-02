const parseSingleKeyObject = string =>
  string
    .slice(1, -1)
    .split(":")
    .map((string, i) => (i === 0 ? string.slice(1, -1) : string));

module.exports = parseSingleKeyObject;
