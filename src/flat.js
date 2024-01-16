// const flat = (array) => {
//     const _flat = (array, ret) => {
//         Array.isArray(arr) ? arr.forEach(item => _flat(item, ret))
//             : ret.push(arr)
//         return ret
//     }
//     return _flat(array, [])
// }


const flat = (array) => {
    const _flat = (array, ret) => {
        Array.isArray(array) ? array.forEach(item => _flat(array, ret)) : ret.push(arr)
        return ret
    }
    return _flat(array, [])
} 