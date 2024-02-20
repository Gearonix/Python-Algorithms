function largestRectangleArea(heights: number[]): number {
  let result = 0
  let stack: number[][] = []
  const leftWidth: number[] = new Array(heights.length).fill(0)
  const rightWidth: number[] = new Array(heights.length).fill(0)

  for (const [i, height] of heights.entries()) {
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

  for (const [i, height] of heights.entries()) {
    const square = (leftWidth[i] + rightWidth[i] + 1) * height
    result = Math.max(result, square)
  }

  return result
}

const lastOf = (arr: number[][]): number => {
  return arr[arr.length - 1]?.[0]
}

export {}
