function lengthOfLongestSubstring(s){
    let size = 0;
    let string = ''
    for (let i = 0; i < s.length; i++) {
        const el = s[i];
        const arr = new Set()
        arr.add(el)
        for (let j = i+1; j < s.length; j++) {
            const jl = s[j];
            if (el!==jl && !arr.has(jl)) {
                arr.add(jl)
            }else{
                break
            }
        }
        string = arr.size > size ? [...arr].join(''):string
        size = Math.max(arr.size,size)
        console.log(string,arr,1111111)
    }
    return string
}

console.log(lengthOfLongestSubstring('abcabcbb'))