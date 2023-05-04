function longestConsecutive(nums: number[]): number {
  const set: Set<number> = new Set(nums)
  let max = 0

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let sequence = 1
      while (set.has(nums[i] + sequence)) {
        sequence += 1
      }
      if (sequence > max) {
        max = sequence
      }
    }
  }
  return max
}

export {}
