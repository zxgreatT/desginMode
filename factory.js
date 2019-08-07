/**
 * 工厂模式 创建对象时不会对客户端暴露创建逻辑，并且使用接口的方式统一创建对象
 * 构造函数和创建者分离
 * 符合开放闭合原则
 */
class Creator{
    create(name){
        return new Animal(name)
    }
}
class Animal{
    constructor(name){
        this.name = name
    }
    read(){
        console.log(this.name)
    }
}
//创建工厂实例
var creator = new Creator();
var Dog = creator.create('dog')
var Cat = creator.create('cat')
Dog.read()
Cat.read()