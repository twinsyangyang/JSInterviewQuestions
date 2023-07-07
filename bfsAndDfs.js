// 当涉及到树或图的遍历时，广度优先遍历（BFS）和深度优先遍历（DFS）是两种常见的算法。下面是它们的概述和用JavaScript实现的示例。

// **广度优先遍历 (BFS)**：
// 广度优先遍历从根节点开始逐层遍历，先访问根节点，然后访问根节点的所有子节点，再依次访问每个子节点的子节点，直到遍历完整个树或图。使用队列数据结构来实现BFS。

// 以下是BFS的JavaScript实现示例：


function bfs (root) {
  const queue = [root]; // 使用队列存储待访问的节点
  while (queue.length > 0) {
    const node = queue.shift(); // 出队首的节点
    console.log(node.value); // 访问节点值

    // 将节点的子节点依次入队
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}


// **深度优先遍历 (DFS)**：
// 深度优先遍历以深度为优先级，从根节点开始一直遍历到最深层的节点，然后回溯到上一层，继续遍历未访问的子节点。使用递归或栈数据结构来实现DFS。

// 以下是DFS的递归实现示例：


function dfsRecursive (node) {
  if (!node) return;
  console.log(node.value); // 访问节点值
  dfsRecursive(node.left); // 递归遍历左子树
  dfsRecursive(node.right); // 递归遍历右子树
}


// 以下是DFS的迭代实现示例（使用栈）：


function dfsIterative (root) {
  const stack = [root]; // 使用栈存储待访问的节点
  while (stack.length > 0) {
    const node = stack.pop(); // 弹出栈顶节点
    console.log(node.value); // 访问节点值

    // 先将右子节点入栈，再将左子节点入栈，保证左子节点先被访问
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
}


// 以上示例中，假设树的节点具有`value`属性，并且有`left`和`right`指向左右子节点。

// BFS和DFS在不同场景下有不同的应用，根据具体的问题和需求选择合适的遍历方式。
// BFS通常用于查找最短路径、拓扑排序等问题，
// DFS常用于寻找所有路径、判断连通性等问题。