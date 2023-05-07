function threeSum(nums: number[]): number[][] {
  const combos = findCombinations(nums)
  console.log(combos)

  const result: Set<string> = new Set()
  for (let i = 0; i < nums.length; i++) {
    const neg = getByValue(combos, -nums[i], i)
    console.log(neg)
    if (neg === undefined) {
      continue
    }
    for (let t = 0; t < neg.length; t++) {
      const resultArr = JSON.stringify([nums[i], nums[neg[t][0]], nums[neg[t][1]]].sort())
      result.add(resultArr)
    }
  }
  return [...result.keys()].map((t) => JSON.parse(t))
}

function findCombinations(arr: number[]): Map<[number, number], number> {
  const result : Map<[number, number], number> = new Map()
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      result.set([i, j], arr[i] + arr[j])
    }
  }
  return result
}

function getByValue(map: Map<[number, number], number>, searchValue: number, currentIdx: number): [number, number][] {
  const result: [number, number][] = []
  for (let [key, value] of map.entries()) {
    if (value === searchValue && !key.includes(currentIdx)) {
      result.push(key)
    }
  }
  return result
}


const array = [2, 3, 4, 5]

findCombinations(array)

// if triplet not in hashmap:
//

export {}
