function isPalindrome(s: string): boolean {
    let temp = s.toLowerCase()
    temp = temp.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\]/gi, '')
    temp = temp.replace(/[^\w+]/,'')
    temp = temp.replaceAll(' ','')

    for(let c = 0; c < temp.length/2; c++){
        if(temp.charAt(c) != temp.charAt(temp.length-1-c)) {
            return false
        }
    }
    return true
};

// is better next time to just loop through to remove non alpha numeric by ascii
