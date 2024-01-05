const flat = (array) => {
    const _flat = (array, ret) => {
        Array.isArray(arr) ? arr.forEach(item => _flat(item, ret))
            : ret.push(arr)
        return ret
    }
    return _flat(array, [])
}