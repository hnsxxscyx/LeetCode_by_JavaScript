/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.81%)
 * Total Accepted:    71.2K
 * Total Submissions: 217K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 *
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 *
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs: string[]) {
  if (strs.length === 0) {
    return ""
  } else {
    const minLengthStr = ((strs: string[]): string => {
      let minStr = strs[0]
      let minLength = strs[0].length
      for (let str of strs) {
        if (str.length < minLength) {
          minStr = str
          minLength = str.length
        }
      }
      return minStr
    })(strs)
    let prefix = ""
    for (let index = 0; index < minLengthStr.length; index++) {
      let isEqual = true
      const temporaryPrefix = minLengthStr.slice(0, index + 1)
      for (let str of strs) {
        if (!str.startsWith(temporaryPrefix)) {
          isEqual = false
        }
      }
      if (!isEqual) {
        break
      } else {
        prefix = temporaryPrefix
      }
    }
    return prefix
  }
}

export default longestCommonPrefix
