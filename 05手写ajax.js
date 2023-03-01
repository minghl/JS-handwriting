function ajax(){
    let xhr = new XMLHttpRequest()
    xhr.open('get',URL,true)
    xhr.send()
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState ===4) {
            if(xhr.status>=200&&xhr.status<300){
                let string = xhr.responseText
                let obj = JSON.parse(string)
            }
        }
    }
}

function ajax(url){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest()
        xhr.open('get',url)
        xhr.send()
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4){
                if(xhr.status>=200&&xhr.status<300){
                    resolve(JSON.parse(xhr.responseText))
                }else{
                    reject('error')
                }
            }
        }
    })
}