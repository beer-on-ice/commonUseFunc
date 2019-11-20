function Parent() {
  this.x = 199
  this.y = 299
}
Parent.prototype.say = function() {
  console.log("say")
}
function Child() {
  this.g = 90
}

Child.prototype = Object.create(Parent.prototype)

/* 
  核心：
    * 原型式继承的object方法本质上是对参数对象的一个浅复制。
  优点：
    * 父类方法可以复用
  缺点：
    * 父类的引用属性会被所有子类实例共享
    * 子类构建实例时不能向父类传递参数
*/
