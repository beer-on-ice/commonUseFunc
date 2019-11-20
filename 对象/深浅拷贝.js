// 浅拷贝
{
  let a = {
    age: 1
  }
  let b = Object.assign({}, a)
  a.age = 2
  console.log(b.age) // 1
}

{
  let a = {
    age: 1
  }
  let b = { ...a }
  a.age = 2
  console.log(b.age) // 1
}

//深拷贝
{
  JSON.parse(JSON.stringify(object))
}

{
  //  Reflect.ownKeys可列出不可枚举的属性
  function deepClone(obj) {
    function isObject(o) {
      return (typeof o === "object" || typeof o === "function") && o !== null
    }

    if (!isObject(obj)) {
      throw new Error("非对象")
    }

    let isArray = Array.isArray(obj)
    let newObj = isArray ? [...obj] : { ...obj }
    Reflect.ownKeys(newObj).forEach(key => {
      newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
    })

    return newObj
  }
}

{
  lodash.deepClone()
}

// 简易手写
{
  function clone(source) {
    var target = {}
    for (var i in source) {
      if (source.hasOwnProperty(i)) {
        if (typeof source[i] === "object") {
          target[i] = clone(source[i]) // 注意这里
        } else {
          target[i] = source[i]
        }
      }
    }

    return target
  }
}
