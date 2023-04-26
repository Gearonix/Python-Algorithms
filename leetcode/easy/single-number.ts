function singleNumber(nums: number[]): number {
  const existing: number[] = []
  for (let num of nums) {
    if (!existing.includes(num)) {
      existing.push(num)
    } else {
      existing.splice(existing.indexOf(num), 1)
    }
  }
  return existing[0]
}
