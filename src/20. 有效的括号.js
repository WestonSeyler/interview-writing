function isValid(str) {
    const stack = [];
    const length = str.length;
    for (let item of str) {
        switch (item) {
            case '{':
            case '[':
            case '(':
                stack.push(item)
                break;
            case "}":
                if (stack.pop() !== '{') return false;
                break
            case ")":
                if (stack.pop() !== '(') return false;
                break
            case "]":
                if (stack.pop() !== '[') return false;
                break
        } 
    }
    return !stack.length
}

const res = isValid('()[]')
console.log(res)