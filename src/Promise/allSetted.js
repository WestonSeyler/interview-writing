function isPromise(fn) {
    return typeof fn === 'function'
}

Promise.allSettled = function (promises) {
    return new Promise((resolve, reject) => {
        let arr = [];
        let timers = 0;
        const setData = (index, data) => {
            arr[index] = data;
            if (++timers == promises.length) {
                resolve(arr);
            }
            console.log('timer', times)
        }
        for (let i = 0; i < promises.length; i++) {
            let current = promises[i];
            if (isPromise(current)) {
                current.then((data) => {
                    setData(i, { status: 'fulfilled', value: data });
                }, err => {
                    setData(i, { status: 'rejected', value: err })
                })
            } else {
                setData(i, { status: 'fulfilled', value: current })
            }
        }
    })
}