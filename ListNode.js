//链表相关的
// 给定一个单链表 L 的头节点 head ，单链表 L 表示为：

// L0 → L1 → … → Ln - 1 → Ln
// 请将其重新排列后变为：

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


//解题两种思路 
// 一、1.找到中间节点（用快慢指针）2.把后半部分反转链表 3.两个链表交替合并，就是每一个的头指向下一个的第二位
// 二、1.用数组存入所有的值，1/2length 找到中间位置，arr[0].next = arr[length-1],以此类推找到中间值的next =null
// 本题方案
// 利用双向队列依次弹出前后对应的节点并进行插入操作
// 首先遍历将链表每一项放入队列
// 每次弹出队列头和队列尾的节点并改变指向
// 将尾节点（队列中的最后一个元素）的next赋值为null
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head === null) { return head }
  let queue = []
  let p = head
  while (p) {
    queue.push(p)
    p = p.next
  }
  while (queue.length > 2) {
    let h = queue.shift()
    let t = queue.pop()
    t.next = h.next
    h.next = t
  }
  queue[queue.length - 1].next = null
  return head
};

