// runtime Beats 95.76%

function productExceptSelf(nums: number[]): number[] {
  console.log(nums)
  const firstSuitable = [1]
  for (let i = 0; i < nums.length - 1; i++) {
    const prev = firstSuitable[i]
    firstSuitable.push(prev * nums[i])
  }
  console.log(firstSuitable)
  const lastSuitable = Array(nums.length - 1).fill(0)
  lastSuitable.push(1)

  for (let i = nums.length - 1; i > 0; i--) {
    const next = lastSuitable[i] // 1 [0]
    lastSuitable[i - 1] = next * nums[i] // 5
  }
  console.log(lastSuitable)

  return firstSuitable.map((num, i) => num * lastSuitable[i])
}
// console.log(productExceptSelf([2, 3, 4, 5]))
console.log(productExceptSelf([1, 2, 3, 4]))

export {}
