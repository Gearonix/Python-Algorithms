const first = (num : number) => {
  return Math.round(num / 10 ** (Math.ceil(Math.log10(num + 1)) - 1))
}
const last = (num: number) => num % 10

const len = (num : number) => {
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
    console.log('Fisrt ' + first(x))
    console.log('Last ' + last(x))
    console.log(len(x))
    console.log('X ' + x)
    console.log(x % 10 ** (len(x) - 1))
    console.log(Math.round(x / 10))
    x = Math.round((x % 10 ** (len(x) - 1)) / 10)
    console.log('Final ', x)
  }
  return true
}

isPalindroqme(1000021)
