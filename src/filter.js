Array.prototype.filter = function (cb, context) {
    const context = this
    var length = this.length;
    let r = []
    for (let i = 0; i < length; i++) {
        cb(this[i], i, this)
        r.push(this[i])
    }
    return r

}

//filter((item)=>item>2)