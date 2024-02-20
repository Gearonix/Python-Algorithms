function trap(heights: number[]): number {
  let totalAmount = 0

  const leftMax = new Array(heights.length).fill(0)
  for (const [i, height] of heights.entries()) {
    if (height > leftMax[i]) {
      leftMax[i + 1] = height
    } else {
      leftMax[i + 1] = leftMax[i]
    }
  }

  const rightMax = new Array(heights.length).fill(0)
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > rightMax[i]) {
      rightMax[i - 1] = heights[i]
    } else {
      rightMax[i - 1] = rightMax[i]
    }
  }

  for (const [i, height_] of heights.entries()) {
    const height = Math.min(leftMax[i], rightMax[i])

    if (height_ > height) {
      continue
    }

    const diff = height - height_
    totalAmount += diff
  }

  return totalAmount
}

export {}
