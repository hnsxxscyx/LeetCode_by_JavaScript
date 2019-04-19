const expect = require("chai").expect
const method = require("../../dist/13.roman-to-integer.js").default
console.log(method)
const testCase = [{
    describe: "3",
    resultDesc: "",
    params: "III",
    result: 3,
  },
  {
    describe: "4",
    resultDesc: "",
    params: "IV",
    result: 4,
  },
  {
    describe: "9",
    resultDesc: "",
    params: "IX",
    result: 9,
  },
  {
    describe: "58",
    resultDesc: "",
    params: "LVIII",
    result: 58,
  },
  {
    describe: "1994",
    resultDesc: "",
    params: "MCMXCIV",
    result: 1994,
  },
  // {
  //   describe: "0",
  //   resultDesc: "",
  //   params: 0,
  //   result: 0
  // }
]

for (let exam of testCase) {
  describe(exam.describe, function () {
    it(exam.resultDesc, function () {
      expect(method(exam.params)).to.be.equal(exam.result)
    })
  })
}