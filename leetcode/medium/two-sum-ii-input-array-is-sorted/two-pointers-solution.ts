function twoSum(nums: number[], target: number): number[] {
  let start = 0 // 0
  let end = nums.length - 1 // 1

  while (start < end) {
    const sum = nums[start] + nums[end]
    if (sum > target) {
      end -= 1
      continue
    }
    if (sum < target) {
      start += 1
      continue
    }
    if (sum === target) {
      return [start + 1, end + 1]
    }
  }
}
