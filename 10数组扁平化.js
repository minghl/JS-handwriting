function flatten(arr){
    let res = []
    for(let i = 0; i<arr.length;i++){
        if(arr[i] instanceof Array){
            res.push(...flatten(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res
}