/**
 * 迭代器模式
 */
class Creater{
    constructor(list){
        this.list = list
    }
    createIterator(){
        return new Iterator(this)
    }
}

class Iterator{
    constructor(creater){
        this.list = creater.list
        this.index = 0
    }
    //判断是否完成
    isDone(){
        if(this.index >= this.list.length){
            return true
        }else{
            return false
        }
    }
    next(){
        return this.list[this.index++]
    }
}
var arr = [1,2,3,4,5]
var creater = new Creater(arr)
var iterator = creater.createIterator()
while(!iterator.isDone()){
    console.log(iterator.next())
}