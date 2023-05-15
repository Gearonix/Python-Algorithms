function dailyTemperatures(temps: number[]): number[] {
  let result: number[] = Array(temps.length).fill(0)
  const stack : number[][] = [[temps[0], 0]]
  for (let i = 1; i < temps.length; i++) {

    while (temps[i] > stack.at(-1)?.[0]) {
      const [val, idx] = stack.pop() as number[]
      result[idx] = i - idx
    }

    let idx = binaryInsert(stack, temps[i])
    stack.splice(idx, 0, [temps[i], i])
  }

  return result
}

const binaryInsert = (array: number[][], target: number): number => {
  if (array.length === 0) {
    return 0
  }
  if (array.length === 1) {
    return array[0]?.[0] > target ? 1 : 0
  }
  let start = 0
  let end = array.length

  while (start < end) {
    const mid = Math.round((start + end) / 2)
    if (target >= array[mid]?.[0]) {
      end = mid - 1
    }
    else {
      start = mid + 1
    }
  }
  if (array[start]?.[0] >= target) {
    return start + 1
  }
  else {
    return start
  }
}

export {}
