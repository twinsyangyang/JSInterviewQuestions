// 请你编写一个函数，它接收两个深度嵌套的对象或数组 obj1 和 obj2 ，并返回一个新对象表示它们之间差异。

// 该函数应该比较这两个对象的属性，并识别任何变化。返回的对象应仅包含从 obj1 到 obj2 的值不同的键。对于每个变化的键，值应表示为一个数组 [obj1 value, obj2 value] 。不存在于一个对象中但存在于另一个对象中的键不应包含在返回的对象中。在比较两个数组时，数组的索引被视为它们的键。最终结果应是一个深度嵌套的对象，其中每个叶子的值都是一个差异数组。

// 你可以假设这两个对象都是 JSON.parse 的输出结果。




/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff (obj1, obj2) {
  const type1 = Object.prototype.toString.call(obj1)
  const type2 = Object.prototype.toString.call(obj2)
  if (type1 !== type2) {
    return [obj1, obj2]
  } else if (type1 === '[object Object]' || type1 === '[object Array]') {
    const res = {}
    for (let [key, val] of Object.entries(obj1)) {
      if (obj2.hasOwnProperty(key)) {
        let val2 = obj2[key]
        const diff = objDiff(val, val2)
        if (Object.keys({ ...diff }).length) {
          res[key] = diff
        }
      }
    }
    return res
  } else if (obj1 !== obj2) {
    return [obj1, obj2]
  }
};