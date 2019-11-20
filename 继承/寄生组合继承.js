function Parent(x) {
  this.x = x
  this.y = y
}

Parent.prototype.say = function() {
  console.log("say")
}

function Child(x) {
  Parent.call(this, x)
}

function inheritPrototype(child, parent) {
  var prototype = Object.create(parent.prototype) // 创建了父类原型的浅复制
  prototype.constructor = child // 修正原型的构造函数
  child.prototype = prototype // 将子类的原型替换为这个原型
}

// 核心：因为是对父类原型的复制，所以不包含父类的构造函数，也就不会调用两次父类的构造函数造成浪费
inheritPrototype(Child, Parent)

/*
 * 优缺点：这是一种完美的继承方式
 */
