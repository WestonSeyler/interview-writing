// 格式化数字 1234567890 为字符串 '1,234,567,890
const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
// export default formatNumber

console.log(formatNumber(1234567890))