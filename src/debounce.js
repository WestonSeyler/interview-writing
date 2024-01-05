const debounce = (fn, delay) => {
    let timer = 0;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, ...args)
        }, delay)
    }
}