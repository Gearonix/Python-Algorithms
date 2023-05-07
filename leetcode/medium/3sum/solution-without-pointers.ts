function threeSum(nums: number[]): number[][] {
  const existing = new Set()
  const result = new Set<string>()
  for (let i = 0; i < nums.length; i++) {
    if (existing.has(nums[i])) {
      continue
    }
    const sumSet = new Set()
    const target = -nums[i]
    for (let sumI = 0; sumI < nums.length; sumI++) {
      if (sumI === i) {
        continue
      }
      const diff = target - nums[sumI]
      if (sumSet.has(diff)) {
        result.add(JSON.stringify([nums[i], diff, nums[sumI]].sort()))
      }
      sumSet.add(nums[sumI])
    }
    existing.add(nums[i])
  }
  return [...result.keys()].map((t) => JSON.parse(t))
}


// YESSSSSSSSSSSSSSSSSSS

export {}
