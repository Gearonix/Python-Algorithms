function longestConsecutive(nums: number[]): number {
  const set: Set<number> = new Set()
  let maxSequence = 0

  for (const num of nums) {
    set.add(num)
  }

  for (const tmp of nums) {
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
