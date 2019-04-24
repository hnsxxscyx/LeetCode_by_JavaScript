/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (37.39%)
 * Total Accepted:    66.8K
 * Total Submissions: 178.3K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str: string) {
  const parentheseType = {
    "{": "}",
    "[": "]",
    "(": ")",
  }
  const stringLength = str.length
  let result = true

  if (stringLength === 0) {
  } else if (stringLength % 2 !== 0) {
    result = false
  } else {
    const paramsArray = str.split("")
    while (paramsArray.length !== 0) {
      const start = paramsArray.shift()
      if (parentheseType[start]) {
        const removeRightParentheses = (lastIndex = 0) => {
          let endIndex = paramsArray.indexOf(parentheseType[start], lastIndex)
          if (endIndex !== -1) {
            if (endIndex % 2 !== 0) {
              // todo
              // result = false
              // break
              removeRightParentheses(endIndex + 1)
            } else {
              if (isValid(paramsArray.slice(0, endIndex).join(""))) {
                paramsArray.splice(0, endIndex + 1)
              } else {
                removeRightParentheses(endIndex + 1)
              }
            }
          } else {
            result = false
          }
        }
        removeRightParentheses()
        if (!result) {
          break
        }
      } else {
        result = false
        break
      }
    }
  }
  return result
}
isValid("[({(())}[()])]")
export default isValid
