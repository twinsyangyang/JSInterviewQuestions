
// 3、插入排序：从第二个数开始往前比，比它大就往后排。
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];

function insertSort (array) {
  const len = array.length
  let current
  let prev
  for (let i = 1; i < len; i++) {
    current = array[i]
    prev = i - 1
    while (prev >= 0 && array[prev] > current) {
      array[prev + 1] = array[prev]
      prev--
    }
    array[prev + 1] = current
  }
  return array
}

// insertSort(a); 

// let arr = [...new Set(bubbleSort(a))];
// console.log(arr, '===');

let a = [1, 3, 5], b = [4, 6, 7]
//合并两个数组到a    a.push.apply(a,b);