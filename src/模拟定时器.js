function mySetTimeout(fn, t) {
    let timerId = null
    function interval() {
        fn()
        timerId = setTimeout(interval, t)
    }
    // clearTimeout(timerId)
    setTimeout(interval, t)
    return {
        oncancel: () => {
            clearTimeout(timerId)
        }
    }
}