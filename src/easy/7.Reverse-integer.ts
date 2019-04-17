/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (32.22%)
 * Total Accepted:    112.1K
 * Total Submissions: 347.8K
 *
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */
/**

 */
var reverse = function(x: number) {
  let reverseNumber = undefined;
  if (x > 2147483647 || x < -2147483648) {
    reverseNumber = 0;
  } else {
    const isMinus: boolean = x < 0;
    const absoluteNumber = Math.abs(x);
    const reverseString = absoluteNumber
      .toString()
      .split("")
      .reverse()
      .join("");
    reverseNumber = Number(reverseString) / (isMinus ? -1 : 1);
  }
  return reverseNumber;
};
export default reverse;
