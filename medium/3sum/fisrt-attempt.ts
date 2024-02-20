import { isUndefined } from '@neodx/std'

function threeSum(nums: number[]): number[][] {
  const combos = findCombinations(nums)

  const result: Set<string> = new Set()
  for (let i = 0; i < nums.length; i++) {
    const neg = getByValue(combos, -nums[i], i)

    if (isUndefined(neg)) {
      continue
    }

    for (const element of neg) {
      const resultArr = JSON.stringify(
        [nums[i], nums[element[0]], nums[element[1]]].sort()
      )
      result.add(resultArr)
    }
  }
  return [...result.keys()].map((t) => JSON.parse(t))
}

function findCombinations(arr: number[]): Map<[number, number], number> {
  const result: Map<[number, number], number> = new Map()
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      result.set([i, j], arr[i] + arr[j])
    }
  }
  return result
}

function getByValue(
  map: Map<[number, number], number>,
  searchValue: number,
  currentIdx: number
): [number, number][] {
  const result: [number, number][] = []
  for (const [key, value] of map.entries()) {
    if (value === searchValue && !key.includes(currentIdx)) {
      result.push(key)
    }
  }
  return result
}

const array = [2, 3, 4, 5]

findCombinations(array)
