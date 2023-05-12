function trap(heights: number[]): number {
  let totalAmount = 0
  const leftMax = Array(heights.length).fill(0)
  const rightMax = Array(heights.length).fill(0)


  let start = 0
  let end = heights.length - 1

  while (end > 0) {
    if (heights[start] > leftMax[start]) {
      leftMax[start + 1] = heights[start]
    }
    else {
      leftMax[start + 1] = leftMax[start]
    }

    if (heights[end] > rightMax[end]) {
      rightMax[end - 1] = heights[end]
    }
    else {
      rightMax[end - 1] = rightMax[end]
    }

    start += 1
    end -= 1
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
