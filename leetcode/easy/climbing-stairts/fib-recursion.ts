const fib = (n: number, sum = 0, next = 1) => {
  if (n === 0) {
    return sum
  }
  return fib(n - 1, next, sum + next)
}

const climbStairsByFib = (n: number): number => {
  return fib(n + 1)
}
