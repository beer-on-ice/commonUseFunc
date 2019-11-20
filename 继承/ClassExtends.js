class Parent {}

class Child extends Parent {
  constructor() {
    super()
  }
}

/* 
  ES6继承与ES5继承的异同：
    * 相同点：本质上ES6继承是ES5继承的语法糖
    * 不同点：

    ES6继承中子类的构造函数的原型链指向父类的构造函数，ES5中使用的是构造函数复制，没有原型链指向。
    ES6子类实例的构建，基于父类实例，ES5中不是。
*/
