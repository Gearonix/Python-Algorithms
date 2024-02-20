function longestConsecutive(nums: number[]): number {
  const set: Set<number> = new Set(nums)
  let max = 0

  for (const num of nums) {
    if (!set.has(num - 1)) {
      let sequence = 1
      while (set.has(num + sequence)) {
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
