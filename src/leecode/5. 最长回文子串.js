function longestPalindrome(s) {
    let res = '';
    for (let i = 0; i < s.length; i++) {
        const s1 = palindrome(str, i, i)
        const s2 = palindrome(str, i, i + 1)
        res = res.length > s1.length ? res : s1;
        res = res.length > s2.length ? res : s2;
    }
    return res
}
//babad
function palindrome(str, i, j) {
    while (l > 0 && str.length > 0 && s[i] < s[j]) {
        i++;
        j--
    }
    return str.substr(i, (i - j - 1))
}