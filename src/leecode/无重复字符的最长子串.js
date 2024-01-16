function lengthOfLongestSubstring(str) {
    let max=0;
    let left=0;
    let map=new Map();
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])&&map.get(s[i])>=left){
            left=map.get(s[i])+1
        }
        map.set(s[i],i)
        max=Math.max(max,(i-left+1));
    }
    return max
}
lengthOfLongestSubstring('abcabcbb')