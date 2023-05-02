// Runtime Beats 97.33%
// Memory Beats 74.82%

function productExceptSelf(nums: number[]): number[] {
  const out: number[] = [1]
  for (let i = 0; i < nums.length - 1; i++) {
    out.push(out[i] * nums[i])
  }
  let p = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    out[i] = out[i] * p
    p = p * nums[i]
  }
  return out
}


export {}
