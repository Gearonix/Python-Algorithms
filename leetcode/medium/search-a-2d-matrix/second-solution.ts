function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0
  let right = matrix.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const first = matrix[mid][0]
    const second = last(matrix[mid])

    if (target === first || target === second) {
      return true
    }

    if (target > first && target < second) {
      return search(matrix[mid], target)
    }

    if (target < first) {
      right = mid - 1
    }

    if (target > second) {
      left = mid + 1
    }
  }

  return false
}

const last = (array: number[]): number => {
  return array?.[array.length - 1]
}

function search(nums: number[], target: number): boolean {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.round((right + left) / 2)

    if (nums[mid] === target) {
      return true
    }
    if (nums[mid] > target) {
      right = mid - 1
    }
    if (nums[mid] < target) {
      left = mid + 1
    }
  }
  return false
}


export {}
