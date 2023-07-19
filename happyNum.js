// 快乐数（Happy Number）指的是按照以下规则进行计算的数：

// 将一个正整数的每个数字的平方相加得到一个新的数字。
// 重复以上步骤，直到得到数字1或者陷入循环无法得到数字1。

function isHappyNumber (n) {
  let all = new Set()
  while (n !== 1 && !all.has(n)) {
    all.add(n)
    n = getNext(n)
  }
  return n === 1
}
function getNext (n) {
  let sum = 0
  if (n > 0) {
    let yu = n % 10
    sum += yu * yu
    n = Math.floor(n / 10)
  }
  return n
}
// 测试
console.log(isHappyNumber(19));  // 输出: true
console.log(isHappyNumber(4));   // 输出: false
