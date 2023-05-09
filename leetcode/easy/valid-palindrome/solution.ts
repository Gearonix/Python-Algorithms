function isPalindrome(str: string): boolean {
  let con = str.toLowerCase().replace(/([^a-z0-9]+)/gi, '')
  while (con.length) {
    if (con[0] !== con[con.length - 1]) {
      return false
    }
    con = con.slice(1, con.length - 1)
  }
  return true
}
