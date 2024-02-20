function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0
  const sorted = radixSort(nums)
  let sequence = 1
  console.log(sorted)
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] + 1 === sorted[i + 1]) {
      sequence += 1
    }
  }
  return sequence
}

const countingSort = (array: number[], place: number): number[] => {
  const cells: number[] = new Array(10).fill(0)
  const result: number[] = new Array(array.length).fill(0)

  for (const element of array) {
    const idx = Math.floor(element / place) % 10
    cells[idx] += 1
  }

  const countLength = cells.length
  for (let i = 0; i < countLength - 1; i++) {
    cells[i + 1] = cells[i] + cells[i + 1]
  }

  cells.unshift(0)
  cells.splice(-1, 1)

  for (const element of array) {
    const idx = Math.floor(element / place) % 10
    const tmp = cells[idx]
    result[tmp] = element
    cells[idx] += 1
  }

  return result
}

// countingSort([1, 0, 3, 1, 3, 1], 1)

const radixSort = (array: number[]) => {
  const max = Math.max(...array)
  let result: number[] = [...array]

  let place = 1
  while (Math.floor(max / place) > 0) {
    result = countingSort(result, place)
    place *= 10
  }

  return result
}

radixSort([53, 89, 150, 36, 633, 233])

// [52, 89, 150, 36, 633, 233]

export {}
