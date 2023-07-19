
// **深度优先思想实现深拷贝函数：**

// 深度优先思想是通过递归的方式，先深入到对象的最底层，然后再逐层返回，
// 将所有的子对象复制到新的对象中。这样可以确保所有嵌套的对象和数组都被正确地拷贝。


function deepCopyDFS (obj, visited = new WeakMap()) {
  // 处理特殊情况，如果是非引用类型或者null，直接返回
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 检查是否已经拷贝过该对象，避免循环引用问题
  if (visited.has(obj)) {
    return visited.get(obj);
  }

  let newObj = Array.isArray(obj) ? [] : {};

  // 将当前对象加入visited中，以便在递归时检查循环引用
  visited.set(obj, newObj);

  // 遍历对象的所有属性，递归拷贝子对象
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = deepCopyDFS(obj[key], visited);
    }
  }

  return newObj;
}


// **广度优先思想实现深拷贝函数：**

// 广度优先思想是通过队列来实现的，首先将对象入队，然后依次出队，处理每个对象的属性，
// 如果属性值是对象或数组，将其入队。这样可以逐层复制对象和数组的属性。

function deepCopyBFS (obj) {
  const queue = [{ original: obj, copy: Array.isArray(obj) ? [] : {} }];
  const visited = new Set();

  while (queue.length > 0) {
    const { original, copy } = queue.shift();
    visited.add(original);

    for (let key in original) {
      if (Object.prototype.hasOwnProperty.call(original, key)) {
        const value = original[key];

        if (typeof value === 'object' && value !== null && !visited.has(value)) {
          // 处理特殊情况，如果是非引用类型或者null，直接赋值
          if (Array.isArray(value)) {
            copy[key] = [];
          } else {
            copy[key] = {};
          }

          // 将新对象入队，用于后续处理
          queue.push({ original: value, copy: copy[key] });
          visited.add(value);
        } else {
          copy[key] = value;
        }
      }
    }
  }

  return copy;
}


// 这两个函数都可以用于实现深拷贝，但需要根据具体的情况来选择使用哪个方法。
// 深度优先的递归实现通常更简洁，而广度优先的迭代实现通常更适合处理特别深的对象或避免栈溢出的情况。