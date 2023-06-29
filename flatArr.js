//数组打平，n是层级
/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  if (n <= 0) {
    return arr
  }
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(...(Array.isArray(arr[i]) ? flat(arr[i], n - 1) : [arr[i]]));
    //重点是[arr[I]] 因为解构赋值，每一层的return都有可能是数组要解构取值
  }
  return result;
};
let arr = [1, 3, 4, 4, 4, 4]
//判断一个数组里面所有值都相等
function checkEqution (arr) {
  arr.every((item) => {
    return item === arr[0]
  })
}