{
  // Es6
  const unique = arr => [...new Set(arr)]
}

{
  //利用reduce+includes
  const unique = arr =>
    arr.reduce((prev, cur) => (prev.includes(cur) ? prev : [...prev, cur]), [])
}

{
  // 利用filter ---- array.indexOf(item,start)
  const unique = arr =>
    arr.filter((item, index, arr) => arr.indexOf(item, 0) === index)
}

{
  //  Es5常用
  const unique = arr => {
    if (!Array.isArray(arr) || arr.length <= 1) return
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          //第一个等同于第二个，splice方法删除第二个
          arr.splice(j, 1)
          j--
        }
      }
    }
    return arr
  }
}

{
  // 使用indexof
  const unique = arr => {
    if (!Array.isArray(arr) || arr.length <= 1) return
    let result = []
    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i])
      }
    }
    return result
  }
}

{
  // 利用对象的属性不能相同的特点进行去重
  const unique = arr => {
    if (!Array.isArray(arr) || arr.length <= 1) return
    let result = []
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
      if (!obj[arr[i]]) {
        result.push(arr[i])
        obj[arr[i]] = 1
      } else {
        obj[arr[i]]++
      }
    }
    return result
  }
}

// {
//   const unique = arr =>
//     arr.reduce(
//       (prev, item) => (prev.includes(item) ? prev : [...prev, item]),
//       []
//     )
// }
// {
//   let arr = [1, 2, 3, 4, 4, 4]
//   const unique = arr =>
//     arr.filter((item, index, arr) => {
//       console.log(arr.indexOf(item))
//       return arr.indexOf(item) === index
//     })
//   unique(arr)
// }
