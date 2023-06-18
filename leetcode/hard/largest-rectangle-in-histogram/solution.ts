function largestRectangleArea(heights: number[]): number {
  let result = 0
  let stack: number[][] = []
  const leftWidth: number[] = Array(heights.length).fill(0)
  const rightWidth: number[] = Array(heights.length).fill(0)

  for (let i = 0; i < heights.length; i++) {
    const height = heights[i]
    while (height <= lastOf(stack)) {
      const [h, idx] = stack.pop() as number[]
      const cost = leftWidth[idx] + 1
      leftWidth[i] += cost
    }
    stack.push([height, i])
  }

  stack = []
  for (let i = heights.length - 1; i >= 0; i--) {
    const height = heights[i]
    while (height <= lastOf(stack)) {
      const [h, idx] = stack.pop() as number[]
      const cost = rightWidth[idx] + 1
      rightWidth[i] += cost
    }
    stack.push([height, i])
  }

  for (let i = 0; i < heights.length; i++) {
    const square = (leftWidth[i] + rightWidth[i] + 1) * heights[i]
    result = Math.max(result, square)
  }

  return result
}

const lastOf = (arr: number[][]): number => {
  return arr[arr.length - 1]?.[0]
}


export {}
