function containsDuplicate(nums: number[]): boolean {
  const existing: number[] = []
  for (const num of nums) {
    if (!existing.includes(num)) {
      existing.push(num)
    } else {
      return true
    }
  }
  return false
}
