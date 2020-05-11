/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// 遍历数组，不满足奇偶性的记录，与下一个不满足的交换
// 致命漏洞，上一个不一定刚好是错开个奇偶数不满足条件啊
// 它这个必须有一个前置条件是不满足奇偶的也是 % 2===0，否则只能删或者加空了
// A.length % 2 == 0

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
	const oddIndexList = [];
	const evenIndexList = [];
	let previousIndex = -1;
	for (const i in A) {
		const shouldRemainder = i % 2;
		if (A[i] % 2 !== shouldRemainder) {
			if (shouldRemainder === 0) {
				// 偶数，与奇数交换
				if (oddIndexList.length > 0) {
					previousIndex = oddIndexList.shift();
				} else {
					evenIndexList.push(i);
					previousIndex = -1;
				}
			} else {
				if (evenIndexList.length > 0) {
					previousIndex = evenIndexList.shift();
				} else {
					oddIndexList.push(i);
					previousIndex = -1;
				}
			}
			if (previousIndex !== -1) {
				const val = A[i];
				A[i] = A[previousIndex];
				A[previousIndex] = val;
			}
		}
	}
	return A;
};
// @lc code=end
