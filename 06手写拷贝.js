function deepCopy(newObj,oldObj){
    for(let i = 0; i< oldObj.length; i++){
        let item = oldObj[i]
        if(item instanceof Array){
            newObj[i] = []
            deepCopy(newObj[i],item)
        }else if(item instanceof Object){
            newObj[i] = {}
            deepCopy(newObj[i],item)
        }else{
            newObj[i] = item
        }
    }
    return newObj
}

function shallowCopy(newObj, oldObj){
    for (const key in object) {
        newObj[key] = oldObj[key]
    }
    return newObj
}