function trap(heights: number[]): number {
  let totalAmount = 0

  let left = 0
  let right = heights.length - 1

  let leftMax = heights[left]
  let rightMax = heights[right]

  while (left < right) {
    if (leftMax <= rightMax) {
      left += 1
      if (heights[left] > leftMax) {
        leftMax = heights[left]
        continue
      }
      const diff = leftMax - heights[left]
      totalAmount += diff
    }
    else {
      right -= 1
      if (heights[right] > rightMax) {
        rightMax = heights[right]
        continue
      }
      const diff = rightMax - heights[right]
      totalAmount += diff
    }
  }

  return totalAmount
}


export {}
