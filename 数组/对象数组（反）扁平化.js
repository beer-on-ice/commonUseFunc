/*
 * 数组扁平化，即一维化
 */

const flatten = arr =>
  [].concat(
    ...arr.map(item => [].concat(item, ...flatten(item.children || [])))
  )

/*
 * 数组反扁平，二维化
 */

const unflattened = arr => {
  // 拷贝一下原有数组，防止后续修改会影响原数组
  const flattenedArr = JSON.parse(JSON.stringify(arr))

  // 临时缓存索引(id 为下标的对象)
  // 大致这个样子 { 1:{},2:{},3:{} }
  let cache = {}

  // 最终要返回的非扁平化数组
  let unflattenedArr = []
  // 存放非根结点的数组
  let tempArr = []

  flattenedArr.forEach(item => {
    // 每一个元素都加上 children 字段
    item.children = []

    // 使用 id 做缓存索引
    // 之后只需要知道 id，就可以直接找到数据对象
    cache[item.id] = item

    if (!item.pid) {
      // 不存在 pid 属性，当前元素为根结点
      // 直接放到最终的返回对象里面，后续元素可以直接挂载
      unflattenedArr.push(item)
    } else {
      // 子节点，放到新对象里面，后续会用到
      tempArr.push(item)
    }
  })

  // 处理非根子节点
  tempArr.forEach(item => {
    // 当前 item 的父节点 id
    const pid = item.pid
    // 通过上面的 cache 索引，直接将子节点挂到对应的父节点上
    cache[pid].children.push(item)
  })

  Object.keys(cache).forEach(id => {
    const item = cache[id]
    if (item.children.length === 0) {
      delete item.children
    }
    delete item.pid
  })

  return unflattenedArr
}
