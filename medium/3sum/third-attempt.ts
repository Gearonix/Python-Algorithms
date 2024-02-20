function threeSum(nums: number[]): number[][] {
  const existing = new Set()
  const result: Set<string> = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (existing.has(nums[i])) {
      continue
    }
    const sum = twoSum(nums, -nums[i], i)
    if (sum) {
      const res = JSON.stringify([nums[i], ...sum].sort())
      result.add(res)
    }
    existing.add(nums[i])
  }
  return [...result.keys()].map((t) => JSON.parse(t))
}

const twoSum = (nums: number[], target: number, filterIdx: number) => {
  const set = new Set()
  for (const [i, num] of nums.entries()) {
    if (i === filterIdx) {
      continue
    }
    const diff = target - num
    if (set.has(diff)) {
      return [diff, num]
    }
    set.add(num)
  }
}
