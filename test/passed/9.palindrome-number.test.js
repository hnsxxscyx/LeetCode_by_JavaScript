const expect = require("chai").expect;
const method = require("../../dist/9.palindrome-number.js").default;
const testCase = [
  {
    describe: "正整数不回文",
    resultDesc: "",
    params: 12345,
    result: false
  },
  {
    describe: "正整数回文",
    resultDesc: "",
    params: 12321,
    result: true
  },
  {
    describe: "负整数",
    resultDesc: "",
    params: -12345,
    result: false
  },
  {
    describe: "个位为0",
    resultDesc: "",
    params: 10,
    result: false
  },
  {
    describe: "0",
    resultDesc: "",
    params: 0,
    result: true
  }
];

for (let exam of testCase) {
  describe(exam.describe, function() {
    it(exam.resultDesc, function() {
      expect(method(exam.params)).to.be.equal(exam.result);
    });
  });
}
