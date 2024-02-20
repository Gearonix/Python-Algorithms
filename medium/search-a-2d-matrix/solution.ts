function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0
  let right = matrix.length - 1

  while (left <= right) {
    const mid = getMiddle(left, right)
    const first = matrix[mid][0]
    const last = matrix[mid].at(-1) as number

    if (target > last) {
      left = mid + 1
    }
    if (target < first) {
      right = mid - 1
    }

    if (target === first || target === last) {
      return true
    }

    if (target > first && target < last) {
      break
    }
  }

  if (left > right) {
    return false
  }

  const idx = getMiddle(left, right)

  left = 0
  right = matrix[idx].length

  while (left <= right) {
    const mid = getMiddle(left, right)
    const guess = matrix[idx][mid]

    if (target === guess) {
      return true
    }

    if (target > guess) {
      left = mid + 1
    }
    if (target < guess) {
      right = mid - 1
    }
  }

  return false
}

const getMiddle = (l: number, r: number) => {
  return Math.floor((l + r) / 2)
}
