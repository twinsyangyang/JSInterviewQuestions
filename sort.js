//第一题js所有和排序相关的算法

// 1、冒泡排序：比较所有相邻元素,如果第一个比第二个大，则交换它们。
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
function bubbleSort(array) {
  const len = array.length
  if (len < 2) return array
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[i]) {
        const temp = array[j]
        array[j] = array[i]
        array[i] = temp
      }
    }
  }
  return array
}
 
bubbleSort(a);  // [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 456]
// 2、选择排序：找到数组中的最小值，选中它并将其放置在第一位。
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
 
function selectSort(array) {
  const len = array.length
  let temp
  let minIndex
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (array[j] <= array[minIndex]) {
        minIndex = j
      }
    }
    temp = array[i]
    array[i] = array[minIndex]
    array[minIndex] = temp
  }
  return array
}
 
selectSort(a); // [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 456]
// 3、插入排序：从第二个数开始往前比，比它大就往后排。
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
 
function insertSort(array) {
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
 
insertSort(a); // [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 456]

// 4、归并排序：把数组劈成两半，再递归地对数组进行“分”操作，直到分成一个个单独的数。
function fn(arr) {
  function sort(left, right) {
    let i = 0;
    let j = 0;
    let result = [];
 
    while (left[i] && right[j]) {
      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
 
    while (left[i]) {
      result.push(left[i++]);
    }
 
    while (right[j]) {
      result.push(right[j++]);
    }
 
    return result;
  }
 
  function fen(arr) {
    if (arr.length < 2) return arr;
    let midIndex = Math.floor(arr.length / 2);
    let left = arr.slice(0, midIndex);
    let right = arr.slice(midIndex, arr.length);
    return sort(fen(left), fen(right));
  }
 
  return fen(arr);
}

// 5、快速排序：从数组中任意选择一个基准，所有比基准小的元素放到基准前面，比基准大的元素放到基准的后面。
let bubble = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let left = [];
  let right = [];
  let numIndex = Math.floor(arr.length / 2);
  let num = arr.splice(numIndex, 1);
  //这里注意不能像下面这样直接写，因为splice会直接改变数组，这样在最后面连上num，才没问题
  // let num = arr[Math.floor(arr.length / 2)];
  arr.forEach((item) => {
    if (item < num) {
      left.push(item);
    } else if (item > num) {
      right.push(item);
    }
  });
  return bubble(left).concat(num, bubble(right));
};
console.log(bubble(a));

// 6、堆排序

var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
 
function heap_sort(arr) {
  var len = arr.length
  var k = 0
  function swap(i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
 
  function max_heapify(start, end) {
    var dad = start
    var son = dad * 2 + 1
    if (son >= end) return
    if (son + 1 < end && arr[son] < arr[son + 1]) {
      son++
    }
 
    if (arr[dad] <= arr[son]) {
      swap(dad, son)
      max_heapify(son, end)
    }
  }
 
  for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {
    max_heapify(i, len)
  }
 
 
 
  for (var j = len - 1; j > k; j--) {
    swap(0, j)
    max_heapify(0, j)
  }
  return arr
 
}
 
heap_sort(a); // [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 456]







