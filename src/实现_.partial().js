const func = (...args) => args

const func123 = partial(func, 1, 2, 3)
const _ = partial.placeholder
const func1_3 = partial(func, 1, _, 3)


function partial(fn, ...args) {
    return function (...restArgs) {
        const argMap = args.map(item => {
            return item.placeholder === partial.placeholder ? restArgs.shift() : arg
        })
        return fn.call(this, ...argMap, ...restArgs)
    }

}
partial.placeholder = Symbol()

func1_3(2, 4)



func123(4)
// [1,2,3,4]