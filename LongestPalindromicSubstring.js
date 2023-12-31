//最长回文字符串
/*中心扩散思想*/

let longestPalindrome = function (s) {
  if (s.length < 2) {
    return s
  }
  let start = 0, maxLength = 1;
  function aroundCenter (left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    aroundCenter(i - 1, i + 1);
    aroundCenter(i, i + 1);
  }
  return s.substring(start, start + maxLength)
}
let str = 'abgdfhhhhfdkjui'
let sliceStr = longestPalindrome(str)
console.log(sliceStr, '==sliceStr');