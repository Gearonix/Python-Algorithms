const first = (num: number) => {
  return Math.round(num / 10 ** (Math.ceil(Math.log10(num + 1)) - 1))
}
const last = (num: number) => num % 10

const len = (num: number) => {
  return Math.ceil(Math.log10(num + 1))
}

const isPalindroqme = (x: number): boolean => {
  if (x < 0) {
    return false
  }
  while (x) {
    if (first(x) !== last(x)) {
      return false
    }
    x = Math.round((x % 10 ** (len(x) - 1)) / 10)
  }
  return true
}
