/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (55.87%)
 * Total Accepted:    97.2K
 * Total Submissions: 174K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 *
 * 示例 1:
 *
 * 输入: 121
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 *
 *
 * 示例 3:
 *
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 *
 *
 * 进阶:
 *
 * 你能不将整数转为字符串来解决这个问题吗？
 *
 */
/**
 *
 */
var isPalindrome = function(num: number): boolean {
  let result = true;
  if (num < 0) {
    result = false;
  } else {
    if (num < 10) {
      result = true;
    } else {
      const bitList: number[] = [];
      for (
        let newNumber = num, bit = newNumber % 10;
        newNumber > 0;
        newNumber = Math.floor(newNumber / 10), bit = newNumber % 10
      ) {
        bitList.push(bit);
      }
      const numLength = bitList.length;
      for (
        let startIndex = 0, endIndex = numLength - 1;
        startIndex <= Math.floor(numLength / 2);
        startIndex++, endIndex--
      ) {
        if (bitList[startIndex] !== bitList[endIndex]) {
          result = false;
          break;
        }
      }
    }
  }
  return result;
};
isPalindrome(12321);
export default isPalindrome;
