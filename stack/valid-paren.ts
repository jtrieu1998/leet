function isValid(s: string): boolean {
    let validMap = new Map([
        [')','('],
        [']','['],
        ['}','{']
        ])
    let stack = []
    for(let c = 0; c < s.length; c++){
        let currChar = s.charAt(c)
        if(validMap.has(currChar)){
            if(stack.length == 0 || stack.pop() != validMap.get(currChar)) return false
        } else {stack.push(currChar)}
    }
    if(stack.length > 0) return false
    return true
};
