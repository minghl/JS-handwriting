Array.prototype.myCall = function(obj){
    obj.fn = this
    let arg = [...arguments].slice(1)
    obj.fn(...arg)
    delete obj.fn
}

Array.prototype.myApply = function(obj){
    obj.fn = this
    let arg = [...arguments][1]||[]
    obj.fn(arg)
    delete obj.fn
}

Array.prototype.myBind = function(obj){
    let fn = this 
    let arg1 = [...arguments].slice(1)
    function Fn(){
        let arg2 = [...arguments]
        return fn.apply(this instanceof Fn? this: obj, [...arg1,...arg2])
    }
    Fn.prototype = this.prototype
    return Fn
}