function findMin(nums: number[]): number {
  let result = Infinity

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    result = Math.min(result, nums[mid])

    if (nums[mid] > nums[right]) {
      left = mid + 1
    }
    else {
      right = mid - 1
    }
  }

  return result
}

export {}
