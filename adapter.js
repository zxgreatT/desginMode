/**
 * 适配器模式
 * 当传递过来的接口不符合我们的预期或者太复杂
 * 创建一个适配器 由适配器来提供方法跟客户打交道
 * 不改变原有的接口 用另一个对象来包含他
 */

class GooleMap{
    show(){
        console.log("欢迎使用谷歌地图")
    }
}
class BaiduMap{
    display(){
        console.log("欢迎使用百度地图")
    }
}

function render(map){
    if(map.show instanceof Function){
        map.show()
    }
}

class BaiduMapAdapter{
    show(){
        var baiduMap = new BaiduMap()
        return baiduMap.display()
    }
}
render(new GooleMap())
render(new BaiduMapAdapter())