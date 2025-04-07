class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
      if(s.length < 2) return false
      if(s.charAt(s.length - 1) == '(' || s.charAt(s.length - 1) == '{' || s.charAt(s.length - 1) == '[') return false
      let stack = []
      for(let c = 0; c < s.length; c++){
          let currChar = s.charAt(c)
          let popped
          switch(currChar){
              case '[':
              case '{':
              case '(':
                  stack.push(currChar)
                  break;
              case ']':
                  popped = stack.pop()
                  if(popped != '[')
                      return false
                  break;
              case ')':
                  popped = stack.pop()
                  if(popped != '(')
                      return false
                  break;
              case '}':
                  popped = stack.pop()
                  if(popped != '{')
                      return false
                  break;
          }
      }
      if(stack.length == 0) return true
      return false
  }
}
