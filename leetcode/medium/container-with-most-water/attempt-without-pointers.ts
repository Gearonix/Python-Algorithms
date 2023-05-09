function maxArea(heights: number[]): number {
  let maxSquare = 0
  const sorted = [...heights].map((i, idx) => [i, idx]).sort((a, b) => a[0] - b[0])

  console.log('heights', heights)
  console.log('sorted', sorted)

  for (let i = 1; i < sorted.length; i++) {
    const [left, leftIdx] = sorted[i - 1] // 1
    let [right, rightIdx] = sorted[i]

    while (heights[rightIdx + 1] === right) {
      console.log('while', heights[rightIdx + 1], right);
      [right, rightIdx] = sorted.find(([item, idx]) => idx === rightIdx + 1) as any
    }

    console.log('rightIdx', rightIdx)

    // left 7
    // right 8
    // MainHeight 7
    // mainWidth 7
    // square 49

    const mainHeight = Math.min(left, right) // 1
    const mainWidth = Math.max(rightIdx, leftIdx) - Math.min(rightIdx, leftIdx)
    const square = mainHeight * mainWidth

    console.log('left', left)
    console.log('right', right)
    console.log('MainHeight', mainHeight)
    console.log('mainWidth', mainWidth)
    console.log('square', square)
    console.log('----')

    if (square > maxSquare) {
      maxSquare = square
    }
  }

  return maxSquare
}

maxArea([1, 0, 0, 0, 0, 0, 0, 2, 2])
