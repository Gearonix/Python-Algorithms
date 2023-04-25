function isPalindrome(x: number): boolean {
  let str = x.toString()
  while (str) {
    if (str[0] !== str[str.length -1]) {
      return false
    }
    str = str.slice(1, -1)
  }
  return true
}

