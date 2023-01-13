//58. Length of Last Word

var lengthOfLastWord = function(s) {

    if(s.length == 0) return 0
    if(s.length == 1 && s[0] === " ") return 0


    let right = s.length-1
    while(s[right]==" " && right>=0){
        right--
    }  

    let left = right
    while(s[left]!= " " && left>=0){
        left--
    }

    return right-left
};


//3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
    if(s.length==0){
        return 0
    }
    let i=0,j=0,map = new Map(),longest = -Infinity
    while(j<s.length){
        if(map.has(s[j])){
            longest = Math.max(longest, map.size )
            while(s[i]!==s[j]){
                map.delete(s[i])
                i++
            }
            i++
        }else{
            map.set(s[j],1)
        }
        console.log(map);
        j++
    }
    longest = Math.max(longest, map.size )

    return longest
};

//76. Minimum Window Substring

var minWindow = function(s, t) {
    let map = new Map()
    t.split("").forEach(ele=>map.set(ele, map.has(ele)?map.get(ele)+1:1))
    
    let start = 0, minLength = Infinity, minLeft = 0,count = 0

    for(let end = 0;end<s.length;end++){
        if(map.has(s[end])){
            map.set(s[end],map.get(s[end])-1)
        }
        if(map.get(s[end])>=0) count++
        console.log(count)

        while(count=== t.length){
            if(minLength>end-start+1){
                minLength = end-start+1
                minLeft = start
            }
            if(map.has(s[start])){
                map.set(s[start],map.get(s[start])+1)
                if(map.get(s[start])>0){
                    count--
                }
            }
            start++
        }
    }
    return minLength!=Infinity?s.slice(minLeft,minLeft+minLength):""
};