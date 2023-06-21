function minEatingSpeed(piles: number[], hours: number): number {
  let left = 1
  let right = Math.max(...piles)

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    let guess = 0

    let i = 0
    while (guess < hours && i < piles.length) {
      guess += Math.ceil(piles[i] / mid)
      i += 1
    }

    if (guess === hours && i === piles.length) {
      return mid
    }

    if (guess < hours) {
      right = mid - 1
    }

    if (guess >= hours) {
      left = mid + 1
    }
  }

  return -1
}

export {}
