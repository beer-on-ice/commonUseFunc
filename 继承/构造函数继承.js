function Parent() {
  this.x = 199
  this.y = 299
}
Parent.prototype.say = function() {
  console.log("say")
}
function Child() {
  Parent.call(this)
  this.g = 90
}

/* 
  优点：
    * 父类的引用属性不会被共享
    * 子类构建实例时可以向父类传递参数
  缺点：
    * 父类的方法不能复用，子类实例的方法每次都是单独创建的。
*/
