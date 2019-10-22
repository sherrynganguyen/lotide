const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const countOnly = require('../countOnly');
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
const expect = require('chai').expect;
describe("#countOnlytest", () => {
  it("returns 1 for Jason", () => {
    expect(result1["Jason"]).to.equal(1);
  });
  it("returns undefined for Karima", () => {
    expect(result1["Karima"]).to.equal(undefined);
  });
  it("returns 2 for Fang", () => {
    expect(result1["Fang"]).to.equal(2);
  });  
});