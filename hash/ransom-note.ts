function canConstruct(ransomNote: string, magazine: string): boolean {
    let letterMap = new Map()
    for(let c = 0; c < magazine.length; c++){
        let currLetter = magazine.charAt(c)
        if(letterMap.has(currLetter)){
            letterMap.set(currLetter, letterMap.get(currLetter)+1)
        } else {
            letterMap.set(currLetter, 1)
        }
    }

    for(let d = 0; d < ransomNote.length; d++){
        let ransomLetter = ransomNote.charAt(d)
        if(!letterMap.has(ransomLetter) || letterMap.get(ransomLetter) == 0){
            return false
        } else {
            letterMap.set(ransomLetter, letterMap.get(ransomLetter)-1)
        }
    }
    return true
};
