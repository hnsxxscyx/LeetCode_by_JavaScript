const expect = require("chai").expect;
const method = require("../../dist/7.Reverse-integer.js").default;
const testCase = [
  {
    describe: "正整数",
    resultDesc: "",
    params: 12345,
    result: 54321
  },
  {
    describe: "负整数",
    resultDesc: "",
    params: -12345,
    result: -54321
  },
  {
    describe: "大于32位正整数",
    resultDesc: "",
    params: 2147483648,
    result: 0
  },
  {
    describe: "大于32位负整数",
    resultDesc: "",
    params: -2147483649,
    result: 0
  },
  {
    describe: "逆序后大于32位整数",
    resultDesc: "",
    params: 1534236469,
    result: 0
  },
  {
    describe: "0",
    resultDesc: "",
    params: 0,
    result: 0
  }
];

for (let exam of testCase) {
  describe(exam.describe, function() {
    it(exam.resultDesc, function() {
      expect(method(exam.params)).to.be.equal(exam.result);
    });
  });
}
