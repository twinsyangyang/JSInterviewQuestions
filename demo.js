// let arr = [...new Set(bubbleSort(a))];

let a = [1, 3, 5], b = [4, 6, 7]
//合并两个数组到a    a.push.apply(a,b);
var arr1 = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
// 5、快速排序：从数组中任意选择一个基准，所有比基准小的元素放到基准前面，比基准大的元素放到基准的后面。
let bubble = (arr) => {
  if (arr.length < 2) return arr;
  let left = []
  let right = []
  let middleIndex = Math.floor(arr.length / 2)
  let middleValue = arr.splice(middleIndex, 1)
  arr.forEach(item => {
    if (item < middleValue) {
      left.push(item)
    } else {
      right.push(item)
    }
  });
  return bubble(left).concat(middleValue, bubble(right))
};
console.log([...new Set(bubble(arr1))], '==shuchu');