const expect = require("chai").expect;
const method = require("../dist/7.Reverse-integer.js").default;
const testCase = [{
  describe: "模版",
  resultDesc: "",
  params: 12345,
  result: 54321
}, ];

for (let exam of testCase) {
  describe(exam.describe, function () {
    it(exam.resultDesc, function () {
      expect(method(exam.params)).to.be.equal(exam.result);
    });
  });
}