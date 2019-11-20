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

Child.prototype = new Parent()
Child.prototype.constructor = Child

/* 
优点：
  * 父类的方法可以被复用
  * 父类的引用属性不会被共享
  * 子类构建实例时可以向父类传递参数
缺点：
  * 调用了两次父类的构造函数，第一次给子类的原型添加了父类的x,y属性，第二次又给子类的构造函数添加了父类的x,y属性，从而覆盖了子类原型中的同名参数。这种被覆盖的情况造成了性能上的浪费。
*/
