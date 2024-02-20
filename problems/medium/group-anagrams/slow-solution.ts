const groupAnagrams = (strs: string[]): string[][] => {
  const sorted = []

  for (const str of strs) {
    sorted.push(quickSort(str.split('')).join(''))
  }

  const anagrams = removeDublicates(sorted)
  const result: string[][] = []

  for (const [anIdx, targ] of anagrams.entries()) {
    result.push([])
    for (let i = 0; i <= sorted.length; i++) {
      if (sorted[i] === targ) {
        result[anIdx].push(strs[i])
      }
    }
  }

  return result
}

// ["eat","tea","tan","ate","nat","bat"]
// ["eat", "eat", "ant", "eat", "ant", "bat"]
// ["eat", "ant", "bat"]
// [["ate","eat","tea"], ["nat","tan"],["bat"]]

const removeDublicates = (array: string[]) => {
  return [...new Set(array)]
}

const randomInt = (max: number) => {
  // min and max included
  return Math.floor(Math.random() * max)
}

const quickSort = (tmp: string[]): string[] => {
  // example: tan
  if (tmp.length < 2) {
    return tmp
  }
  // const dividerIdx = randomInt(tmp.length)
  const dividerIdx = 0

  const divider = tmp[dividerIdx].charCodeAt(0)
  const less = []
  const greater = []

  for (const char of tmp.slice(1)) {
    if (char.charCodeAt(0) <= divider) {
      less.push(char)
    } else {
      greater.push(char)
    }
  }

  return [
    ...quickSort(less),
    String.fromCharCode(divider),
    ...quickSort(greater)
  ]
}
