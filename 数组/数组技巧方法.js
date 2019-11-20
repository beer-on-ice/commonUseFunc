{
  /*
   * arr1调用了 数组的push方法，arr2即为参数
   */

  // es5
  ;[].push.apply(arr1, arr2)
  // es6
  arr1.push(...arr2)
}

{
  /*
   * 扩展运算符替代apply方法
   */
  // es5
  function f(x, y, z) {}
  const arr = [1, 2, 3]
  f.apply(null, arr)

  // es6
  f(...arr)
}
