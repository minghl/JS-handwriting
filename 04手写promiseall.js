Promise.all = (arr)=>{
    let res = []
    let index = 0
    return new Promise((resolve,reject)=>{
        function addData(k,v){
            res[k] = v
            index++
            if(index===arr.length){
                resolve(res)
            }

        }
        for(let i = 0; i<arr.length;i++){
            if(arr[i] instanceof Promise){
                arr[i].then(result=>addData(i,result),reason=>reject(reason))
            }else{
                addData(i,arr[i])
            }
        }
    })
}

Promise.race = (arr)=>{
    return new Promise((resolve,reject)=>{
        arr.forEach(item => {
            if(item instanceof Promise){
                item.then(result=>resolve(result),reason=>reject(reason))
            }else{
                resolve(item)
            }
        });
    })
}