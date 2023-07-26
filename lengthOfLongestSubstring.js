// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //解法 滑动窗口(i,j)
  const set = new Set()
  let i = 0, j = 0, maxLength = 0;
  if (s.length === 0) {
    return 0
  }
  for (i; i < s.length; i++) {
    const element = s[i];
    if (!set.has(element)) {
      set.add(element)
      maxLength = Math.max(maxLength, set.size)
    } else { //不含有一定会去删除所以不需要比对 length
      while (set.has(element)) {
        set.delete(s[j]);
        j++
      }
      set.add(element)
    }
  }
  return maxLength
};

// let a = lengthOfLongestSubstring('asgggdhgfjk')
// console.log(a);

//同类型

/*给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
返回 滑动窗口中的最大值 。
示例 1：
输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
示例 2：

输入：nums = [1], k = 1
输出：[1]*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function (nums, k) {
//   let i = 0, j = k, maxValue = 0, maxValueArr = [];
//   while ((i + k) <= nums.length) {
//     let arrMiddle = nums.slice(i, j)
//     maxValue = Math.max(...arrMiddle)
//     maxValueArr.push(maxValue)
//     i++
//     j++
//   }
//   return maxValueArr;
// };

var maxSlidingWindow = function (nums, k) {
  const res = [];
  const queue = [];
  for (let right = 0; right < nums.length; right++) {
    //当队列不为空的时候且当前元素>=队尾的元素，则将队尾的元素删除。
    while (queue.length && nums[right] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    //存储元素的下标
    queue.push(right);
    //计算窗口的左边界
    let left = right - k + 1;
    //当队首元素的下标<滑动窗口的左边界时，代表 队首的元素不在滑动窗口内，删除队首元素。
    if (queue[0] < left) {
      queue.shift()
    }
    //因为数组下标从0开始，当右边界+1>=窗口大小时，此时，窗口形成，将队首的元素放入结果。
    if (right + 1 >= k) {
      res.push(nums[queue[0]])
    }
  }
  return res;
};
let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
let a = maxSlidingWindow(nums, k)
console.log(a);




