function twoSum(numbers: number[], target: number): number[] {
  const set: Set<number> = new Set(numbers)
  for (let i = 0; i < numbers.length; i++) {
    const difference = target - numbers[i]
    if (set.has(difference)) {
      numbers[i] = undefined
      return [i + 1, numbers.indexOf(difference) + 1]
    }
  }
}
