// 19/4/16
// 执行用时 : 1072 ms, 在Two Sum的JavaScript提交中击败了5.02% 的用户
// 内存消耗: 66.7 MB, 在Two Sum的JavaScript提交中击败了5.00 % 的用户
var twoSum = function(nums, target) {
  let resultArr = undefined;
  for (let index in nums) {
    index = Number(index);
    const num = nums[index];
    const difference = target - num;
    let lastNums = [...nums];
    lastNums.splice(0, index + 1);
    const secondNum = lastNums.indexOf(difference);
    if (secondNum !== -1) {
      resultArr = [index, secondNum + (index + 1)];
      break;
    }
  }
  return resultArr;
};
console.log(twoSum([3, 2, 4], 6));
