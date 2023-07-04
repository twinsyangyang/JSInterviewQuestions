// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

//  

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。



/**
 * @param {string} s
 * @return {string}
 */
//双指针解法
var longestPalindrome = function (s) {
  let max = ''

  for (let i = 0; i < s.length; i++) {
    // 分奇偶， 一次遍历，每个字符位置都可能存在奇数或偶数回文
    helper(i, i)
    helper(i, i + 1)
  }

  function helper (l, r) {
    // 定义左右双指针
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
    }
    // 拿到回文字符， 注意 上面while满足条件后多执行了一次，所以需要l+1, r+1-1
    const maxStr = s.slice(l + 1, r + 1 - 1);
    // 取最大长度的回文字符
    if (maxStr.length > max.length) max = maxStr
  }
  return max
};
