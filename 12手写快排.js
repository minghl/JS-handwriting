function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid = arr[0]
    let smlArr = []
    let bigArr = []
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]<mid){
            smlArr.push(arr[i])
        }else{
            bigArr.push(arr[i])
        }
        
    }
    return [...quickSort(smlArr),mid,...quickSort(bigArr)]
}