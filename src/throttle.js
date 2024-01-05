function throttle(fn, delay) {
    let lastTimer = 0
    return (...args) => {
        const currentTime = Date.now();
        if (currentTime - lastTimer > delay) {
            fn.call(this, args)
            lastTimer = currentTime;
        }
    }
}