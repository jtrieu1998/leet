def lengthOfLongestSubstring(s: str) -> int:
  maxLength = 1
  currSubString = ""
  for c in s:
    if c not in currSubString:
      currSubString += c
    else:
      x = 0
      while x < len(currSubString):
        if currSubString[x] == c:
          currSubString = currSubString[x+1:] + c
          break
        else:
          x += 1
    if len(currSubString) > maxLength:
        maxLength = len(currSubString)
  print(currSubString)
  return maxLength


if __name__ == "__main__":
  print(lengthOfLongestSubstring("xxxx"))
