function trap(heights: number[]): number {
  let totalAmount = 0
  const leftMax = new Array(heights.length).fill(0)
  const rightMax = new Array(heights.length).fill(0)

  let start = 0
  let end = heights.length - 1

  while (end > 0) {
    if (heights[start] > leftMax[start]) {
      leftMax[start + 1] = heights[start]
    } else {
      leftMax[start + 1] = leftMax[start]
    }

    if (heights[end] > rightMax[end]) {
      rightMax[end - 1] = heights[end]
    } else {
      rightMax[end - 1] = rightMax[end]
    }

    start += 1
    end -= 1
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
