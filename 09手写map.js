Array.prototype.myMap = function(fn){
    let arr = this
    let res = []
    arr.forEach(item => res.push(fn.call(this,item)))
    return res
}

Array.prototype.myReduce = function(fn, init){
    let arr = this
    let initV = init === undefined? arr[0]:init
    let initI = init === undefined? 1:0
    for(let i = initI;i<arr.length;i++){
        initV = fn.call(this,initV,arr[i],i,arr)
    }
    return initV
}