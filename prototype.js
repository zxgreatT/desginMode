//用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象
var prototype = {
    name : 'Tzx',
    getName:function(){
        console.log(this.name)
    }
}
var obj = Object.create(prototype,{
    job:{
        value:'hihi'
    }
})
obj.getName()
console.log(obj.job)
//方法继承
var Parent = function () {}
Parent.prototype.show = function (name){
    // console.log(this)
    console.log(name)
}
var Child = function () {}
new Parent().show("haha")
Child.prototype = new Parent()
new Child().show('tzx')
var Foo = function(){}
console.log(Foo.prototype.__proto__ === Object.prototype)