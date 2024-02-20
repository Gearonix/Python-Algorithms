function maxArea(heights: number[]): number {
  let maxSquare = 0
  let start = 0
  let end = heights.length - 1

  while (start < end) {
    const width = end - start
    const height = Math.min(heights[start], heights[end])

    const square = width * height

    maxSquare = Math.max(maxSquare, square)

    if (heights[start] <= heights[end]) {
      while (heights[start + 1] <= heights[start] && start < end) {
        start += 1
      }
      start += 1
    } else {
      while (heights[end - 1] <= heights[end] && start < end) {
        end -= 1
      }
      end -= 1
    }
  }

  return maxSquare
}

