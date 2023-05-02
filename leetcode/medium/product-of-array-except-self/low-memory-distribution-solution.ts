// Memory Beats 52.97%

function productExceptSelf(nums: number[]): number[] {
  const fs = [1]
  for (let i = 0; i < nums.length - 1; i++) {
    fs.push(fs[i] * nums[i])
  }
  const ls = Array(nums.length - 1).fill(0)
  ls.push(1)
  for (let i = nums.length - 1; i > 0; i--) {
    ls[i - 1] = ls[i] * nums[i] // 5
  }
  return fs.map((num, i) => num * ls[i])
}

// productExceptSelf([2, 3, 4, 5])

export {}
