function isPromise(fn) {
    return typeof fn === 'function'
}

Promise.allSettled=function(promises){
    return new Promise((resolve,reject)=>{
        let arr=[]
        let timers=0;
        const setData=(index,data)=>{
            arr[index]=data;
            if(++timers===promises.length){
                    resolve(arr)
            }
        }
        for(let i=0;i<promises.length;i++){
            
        }
    })
}