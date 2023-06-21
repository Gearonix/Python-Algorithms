function minEatingSpeed(piles: number[], hours: number): number {
  let left = 1
  let right = Math.max(...piles)
  let result = right

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    let guess = 0

    for (let i = 0; i < piles.length; i++) {
      guess += Math.ceil(piles[i] / mid)
    }

    if (guess <= hours) {
      result = Math.min(result, mid)
      right = mid - 1
    }

    if (guess > hours) {
      left = mid + 1
    }
  }

  return result
}

export {}
