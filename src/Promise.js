const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'


function MyPromise(fn) {
    const that = this
    this.state = PENDING;
    this.value = null

    that.resolvedCallbacks = []
    that.rejectedCallbacks = []


    function resolve(value) {
        if (that.state === PENDING) {
            that.value = RESOLVED;
            that.value = value
            that.rejectedCallbacks.map(cb => cb(that.value))
        }
    }

    function reject(cb) {
        that.state = REJECTED
        that.value = value
        that.rejectedCallbacks.map(cb => cb(that.value))
    }
    try {
        fn(resolve, reject)
    } catch (error) {
        reject(e)
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    const that = this;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : e => { return }

    if (this.state === PENDING) {
        this.resolvedCallbacks.push(onFulfilled)
        this.rejectedCallbacks.push(onRejected)
    }
    if (this.state == RESOLVED) {
        onFulfilled(that.value)
    }
    if (this.state === REJECTED) {
        onRejected(that.value)
    }
}