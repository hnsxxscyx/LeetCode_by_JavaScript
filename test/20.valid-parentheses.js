const expect = require("chai").expect;
const method = require("../dist/20.valid-parentheses").default;
const testCase = [{
    describe: "正常索引及顺序",
    resultDesc: "",
    params: '[](){}',
    result: true
  },
  {
    describe: "正常索引及顺序",
    resultDesc: "",
    params: '[]({})',
    result: true
  },
  {
    describe: "错误索引",
    resultDesc: "",
    params: '[](({}',
    result: false
  },
  {
    describe: "错误顺序",
    resultDesc: "",
    params: '[]({)}',
    result: false
  },
  {
    describe: "空字符串",
    resultDesc: "",
    params: '',
    result: true
  },
  {
    describe: "出错用例",
    resultDesc: "",
    params: '(([]){})',
    result: true
  },
  {
    describe: "出错用例2",
    resultDesc: "",
    params: '[([]])',
    result: false
  },
  {
    describe: "出错用例3",
    resultDesc: "",
    params: '[({(())}[()])]',
    result: true
  },
];

for (let exam of testCase) {
  describe(exam.describe, function () {
    it(exam.resultDesc, function () {
      expect(method(exam.params)).to.be.equal(exam.result);
    });
  });
}