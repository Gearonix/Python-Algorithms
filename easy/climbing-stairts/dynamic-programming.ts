function climbStairs(n: number): number {
  const def = 1
  const cache: { [key: number]: number } = {
    [n]: def
  }
  for (let i = n - 1; i >= 0; i -= 1) {
    const sb1 = cache[i + 1] || 0
    const sb2 = cache[i + 2] || 0
    cache[i] = sb1 + sb2
  }
  return cache[0]
}
