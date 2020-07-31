;[] == ![]
// true

/*
  1. 首先会判断两者类型是否相同。相同的话就是比大小了
  2. 类型不相同的话，那么就会进行类型转换
  3. 会先判断是否在对比 null 和 undefined，是的话就会返回 true
  4. 判断两者类型是否为 string 和 number，是的话就会将字符串转换为 number
  5. 判断其中一方是否为 boolean，是的话就会把 boolean 转为 number 再进行判断
  6. 判断其中一方是否为 object 且另一方为 string、number 或者 symbol，是的话就会把 object 转为原始类型再进行判断
 */

/*
 * 1. [] == ![] 先触发了上面的2，![]里[] 转换为true,![]最终得到false
 * 2. [] == false 然后触发上面5，false => 0
 * 3. [] == 0 然后触发上面6，[] => 0  ==> 结果true
 */
