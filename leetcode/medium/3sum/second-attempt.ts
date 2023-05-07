function threeSum(nums: number[]): number[][] {
  const combos = findCombinations(nums)
  console.log(combos)

  const result: Set<string> = new Set()
  for (let i = 0; i < nums.length; i++) {
    const neg = combos.get(-nums[i])

    if (neg) {
      for (let t = 0; t < neg.length; t++) {
        const [left, right] = neg[t]
        if (i === left || i === right) {
          continue
        }
        const resultArr = JSON.stringify([nums[i], nums[left], nums[right]].sort())

        console.log([nums[i], nums[left], nums[right]])
        result.add(resultArr)
      }
    }
  }
  return [...result.keys()].map((t) => JSON.parse(t))
}

function findCombinations(arr: number[]) {
  const result : Map<number, [number, number][]> = new Map()
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j]
      result.set(sum, [...(result.get(sum) || []), [i, j]])
    }
  }
  return result
}


export {}
