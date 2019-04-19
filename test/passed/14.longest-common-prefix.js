const expect = require("chai").expect
const method = require("../../dist/14.longest-common-prefix.js").default

const testCase = [{
    describe: "有公共前缀",
    resultDesc: "",
    params: ["flower", "flow", "flight"],
    result: 'fl',
  },
  {
    describe: "无公共前缀",
    resultDesc: "",
    params: ["dog", "racecar", "car"],
    result: '',
  },
  {
    describe: "空数组",
    resultDesc: "",
    params: [],
    result: '',
  },
  {
    describe: "仅有一个",
    resultDesc: "",
    params: ['a'],
    result: 'a',
  },
  {
    describe: "单个字符",
    resultDesc: "",
    params: ['a', 'a'],
    result: 'a',
  },
]

for (let exam of testCase) {
  describe(exam.describe, function () {
    it(exam.resultDesc, function () {
      expect(method(exam.params)).to.be.equal(exam.result)
    })
  })
}