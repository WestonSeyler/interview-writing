// 格式化数字 1234567890 为字符串 '1,234,567,890
const formatNumber = (number) => {
    // return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    const str = [];
    let i = number.length % 3
    if (i) {
        str.push(number.slice(0,i))
    }
    for (; i < number.length; i = i + 3) {
        str.push(number.slice(i, i + 3))
    }
    console.log(str.join(','))


}
// export default formatNumber
formatNumber('1234567890')
// console.log(formatNumber(1 234 567 890))