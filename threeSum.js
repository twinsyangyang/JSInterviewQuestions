/* 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
你返回所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。

1.给数组排序
2.遍历数组，从0遍历到length-2
3.如果当前数字等于前一个数字，则跳过这个数
4.如果数字不同，则设置start =arr[i+1] ，end=length-1,查看i，start和end三个数的和比0大还是比0小，
start++，如果比0大，end--,
如果等于0，把这三个数加到数组里。
5.返回结果
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = []
  nums = nums.sort((a, b) => { a - b })
  let len = length - 2
  for (let i = 0; i < len; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let start = i + 1, end = nums.length - 1;
      while (start < end) {
        if (nums[i] + nums[start] + nums[end] === 0) {
          result.push([nums[i], nums[start], nums[end]]);
          start++;
          end--;
          while (start < end && nums[start] === nums[start - 1]) {
            start++
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end--
          }
        } else if (nums[i] + nums[start] + nums[end] < 0) {
          start++
        } else {
          end--
        }
      }
    }
  }
  return result
};