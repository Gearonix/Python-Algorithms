function trap(heights: number[]): number {
  let totalAmount = 0

  const leftMax = Array(heights.length).fill(0)
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > leftMax[i]) {
      leftMax[i + 1] = heights[i]
    }
    else {
      leftMax[i + 1] = leftMax[i]
    }
  }

  const rightMax = Array(heights.length).fill(0)
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > rightMax[i]) {
      rightMax[i - 1] = heights[i]
    }
    else {
      rightMax[i - 1] = rightMax[i]
    }
  }

  for (let i = 0; i < heights.length; i++) {
    const height = Math.min(leftMax[i], rightMax[i])

    if (heights[i] > height) {
      continue
    }

    const diff = height - heights[i]
    totalAmount += diff
  }

  return totalAmount
}


export {}
