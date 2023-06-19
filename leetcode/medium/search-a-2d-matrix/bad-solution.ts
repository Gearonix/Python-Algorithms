function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0
  let right = matrix.length - 1
  while ((left + 1) < right) {
    const mid = Math.round((left + right) / 2)
    const first = last(matrix[mid - 1])
    const second = matrix[mid + 1]?.[0]
    const isMore = target > first
    const isLess = target < second

    if (isMore && isLess) {
      return search(matrix[mid], target)
    }

    if (isMore) {
      left = mid
    }
    if (isLess) {
      right = mid
    }
  }

  return search(matrix[left], target) || search(matrix[right], target)
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
