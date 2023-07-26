
function findMostRepeatedChar (str) {
  const charCountMap = new Map();

  // 统计每个字符出现的次数
  for (const char of str) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }

  let maxChar = '';
  let maxCount = 0;

  // 找到出现次数最多的字符和次数
  for (const [char, count] of charCountMap) {
    if (count > maxCount) {
      maxChar = char;
      maxCount = count;
    }
  }

  return { char: maxChar, count: maxCount };
}

// 测试
const str = "abcccddddeeeeffff";
const result = findMostRepeatedChar(str);
console.log(`重复次数最多的字符是 '${result.char}'，出现了 ${result.count} 次。`);























