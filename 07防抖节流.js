// 防抖：多次点击只触发一次
// 节流：一段时间只触发一次
/*
    其实本质上都是为了节省程序的性能（防止高频函数调用）
    借助了闭包的特性来缓存变量（状态）
    都可以使用setTimeout实现
*/ 
function debounce(fn,delay){
    let timer = 0
    return ()=>{
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this,[...arguments])
            timer = 0
        }, delay);
    }
}

function throttle(fn, delay){
    let timer = 0
    return ()=>{
        if(timer){
            return
        }
        timer = setTimeout(() => {
            fn.apply(this,[...arguments])
            timer = 0
        }, delay);
    }
}