// def dfs(node):
//     global its
//     if node == '8':
//         return print(its)
//     if node not in visited:
//         its += 1
//         visited.append(node)
//         for neighbour in graph[node]:
//             dfs(neighbour)

const climbStairs = (final: number): number => {
  const cache = {}
  const n = 0
  return fn(final, n, cache)
}

const fn = (final: number, n: number, cache: {[key: string]: number}): number => {
  if (n === final) {
    return 1
  }
  if (n > final) {
    return 0
  }
  if (!cache[n]) {
    const left = fn(final, n + 1, cache)
    const right = fn(final, n + 2, cache)
    cache[n] = left + right
    return left + right
  }
  return cache[n]
}

