function longestConsecutive(nums: number[]): number {
  const set: Set<number> = new Set()
  let maxSequence = 0

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i])
  }

  for (let i = 0; i < nums.length; i++) {
    const tmp = nums[i]
    if (!set.has(tmp - 1)) {
      let next = tmp + 1
      let sequence = 1
      while (set.has(next)) {
        sequence += 1
        next += 1
      }
      if (sequence > maxSequence) {
        maxSequence = sequence
      }
    }
  }
  return maxSequence
}

export {}
