function myInstanceof(son, father){
    while(son){
        if(son.__proto__===father.prototype){
            return true
        }
        son = son.__proto__
    }
    return false
}