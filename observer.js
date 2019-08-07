/**
 * 订阅模式 定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将会得到通知
 * 下面这个例子 on订阅 enit提交 remove移除
 */
class Event{
    constructor(){
        this.eventTypeObj = {}
    }

    on(eventType,fn){
        if(!this.eventTypeObj[eventType]){
            //储存不同的订阅回调
            this.eventTypeObj[eventType] = []
        }
        this.eventTypeObj[eventType].push(fn)
    }
    emit(){
        var eventType = Array.prototype.shift.apply(arguments)
        var eventList = this.eventTypeObj[eventType]
        for(var i = 0;i < eventList.length;i++){
            eventList[i].apply(eventList[i], arguments)
        }
    }

    remove(eventType,fn){
        var eventTypeList = this.eventTypeObj[eventType]
        if(!eventTypeList){
            return false
        }
        if(!fn){
            eventTypeList && (eventTypeList.length = 0)
        }else{
            for(var i = 0;i < eventTypeList.length;i++){
                if(eventTypeList[i] === fn){
                    eventTypeList.splice(i,1)
                    i--
                }
            }
        }
    }
}
var handle = function(...data){
    console.log(data)
}
var handle1 = function(...data){
    console.log(data)
}
var event = new Event()
event.on('click', handle)
event.on('click', handle1)
event.emit('click', '1','2')   
event.on('on',handle)
event.emit('on',"hihi")
event.remove('click')
event.emit('click', '2')  