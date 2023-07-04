//nextTick的实现原理 (vue2 vue3)
// 在执行 this.name = '沐华' 的时候，就会触发 Watcher 更新，watcher 会把自己放到一个队列

// 用队列的原因是比如多个数据变更就更新视图多次的话，性能上就不好了，所以对视图更新做一个异步更新的队列，避免重复计算和不必要的DOM操作，在下一轮事件循环的时候刷新队列，并执行已去重的任务(nextTick的回调函数)，更新视图
// 然后调用 nextTick()，响应式派发更新的源码在这一块是这样的，地址：src/core/observer/scheduler.js - 164行

export function queueWatcher (watcher: Watcher) {
  // ...
  // 因为每次派发更新都会引起渲染，所以把所有 watcher 都放到 nextTick 里调用
  nextTick(flushSchedulerQueue)
}
// 这里参数 flushSchedulerQueue 方法就会被放入事件循环，主线程任务的行完后就会执行这个函数，对 watcher 队列排序、遍历、执行 watcher 对应的 run 方法，然后 render，更新视图

// 也就是说 this.name = '沐华' 的时候，任务队列可以简单理解成这样 [flushSchedulerQueue]

// 然后下一行 console.log(...)，由于会更新视图的任务 flushSchedulerQueue 在任务队列里没有执行，所以无法拿到更新后的视图

// 然后执行到 this.$nextTick(fn) 的时候，添加一个异步任务，这时的任务队列可以简单理解成这样
// [flushSchedulerQueue, fn]    这句是关键

// 然后同步任务就执行完了，接着按顺序执行任务队列里的任务，第一个任务执行就会更新视图，后面自然能得到更新后的视图了