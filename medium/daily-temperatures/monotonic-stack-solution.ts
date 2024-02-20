const peek = (array: number[][]): number[] => array[array.length - 1]

function dailyTemperatures(temps: number[]): number[] {
  const result: number[] = new Array(temps.length).fill(0)
  const stack: number[][] = []
  for (const [i, temp] of temps.entries()) {
    while (temp > peek(stack)[0]) {
      const [value, idx] = peek(stack)
      result[idx] = i - idx
      stack.pop()
    }

    stack.push([temp, i])
  }
  return result
}
