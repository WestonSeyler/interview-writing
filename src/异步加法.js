function asyncAdd(a, b, callback) {
    setTimeout(function () {
        callback(null, a + b);
    }, 500);
}
const promiseAdd = (a, b) => new Promise((resolve, reject) => {
    asyncAdd(a, b, (err, res) => {
        if (err) {
            reject(err)
        } else {
            resolve(res)
        }
    })
})
async function serialSum(...args) {
    return args.reduce((task, now) => {
        task.then(res => promiseAdd(res, now))
    }, Promise.resolve(0))
}

(async () => {
    console.log('Running...');
    const res1 = await serialSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12)
    console.log(res1)
})()