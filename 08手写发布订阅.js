class EventEmitter{
    constructor(){
        this.events = {}
    }

    on(eventName, fn){
        if(this.events[eventName]){
            this.events[eventName].push(fn)
        }else{
            this.events[eventName] = [fn]
        }
    }

    off(eventName, fn){
        if(eventName && fn){
            this.events[eventName] = this.events[eventName].filter(func => func !==fn)
        }
        if(eventName && !fn){
            this.events[eventName] = []
        }
        if(!eventName && !fn){
            this.events = {}
        }
    }

    emit(eventName){
        if(this.events[eventName]){
            this.events[eventName].forEach(func =>{
                func()
            });
        }
    }

    once(eventName, fn){
        const func = ()=>{
            fn.apply(this,[...arguments])
            this.off(eventName,func)
        }
        this.on(eventName,func)
    }
}