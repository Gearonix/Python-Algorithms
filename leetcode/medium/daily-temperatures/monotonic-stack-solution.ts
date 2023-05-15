const peek = (array: number[][]): number[] =>
  array[array.length - 1]


function dailyTemperatures(temps: number[]): number[] {
  let result: number[] = Array(temps.length).fill(0)
  const stack : number[][] = []
  for (let i = 0; i < temps.length; i++) {
    while (temps[i] > peek(stack)?.[0]) {
      const [value, idx] = peek(stack)
      result[idx] = i - idx
      stack.pop()
    }

    stack.push([temps[i], i])
  }
  return result
}


export {}
