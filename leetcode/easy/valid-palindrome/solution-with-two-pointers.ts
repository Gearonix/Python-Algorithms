function isPalindrome(s: string): boolean {
  const con = s.toLowerCase().replace(/([^a-z0-9]+)/gi, '')
  let start = 0
  let end = con.length - 1
  while (start < end) {
    if (con[start] !== con[end]) {
      return false
    }
    start += 1
    end -= 1
  }
  return true
}
