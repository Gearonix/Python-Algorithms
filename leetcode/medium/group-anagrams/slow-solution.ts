function groupAnagrams(strs: string[]): string[][] {
  const sorted = []
  for (let str of strs) {
    sorted.push(quickSort(str.split('')).join(''))
  }
  console.log('strs ', strs)
  console.log('Sorted ', sorted)
  const anagrams = removeDublicates(sorted)
  console.log('Anagrams ', anagrams)
  const result: string[][] = []
  for (let anIdx = 0; anIdx < anagrams.length; anIdx++) {
    const targ = anagrams[anIdx]
    result.push([])
    for (let i = 0; i <= sorted.length; i++) {
      if (sorted[i] === targ) {
        result[anIdx].push(strs[i])
      }
    }
  }
  console.log('Result ', result)

  return result
}

// ["eat","tea","tan","ate","nat","bat"]
// ["eat", "eat", "ant", "eat", "ant", "bat"]
// ["eat", "ant", "bat"]
// [["ate","eat","tea"], ["nat","tan"],["bat"]]

const removeDublicates = (array: string[]) => {
  return [...new Set(array)]
}

const randomInt = (max: number) => { // min and max included
  return Math.floor(Math.random() * (max))
}

const quickSort = (tmp: string[]): string[] => { // example: tan
  if (tmp.length < 2) {
    return tmp
  }
  // const dividerIdx = randomInt(tmp.length)
  const dividerIdx = 0

  const divider = tmp[dividerIdx].charCodeAt(0)
  let less = []
  let greater = []

  for (let char of tmp.slice(1)) {
    if (char.charCodeAt(0) <= divider) {
      less.push(char)
    } else {
      greater.push(char)
    }
  }

  return [...quickSort(less), String.fromCharCode(divider), ...quickSort(greater)]
}

// def quick_sort(array):
//     # O(n * log(n))
//     global count
//     count += 1
//     logger.start()
//     if len(array) < 2:
//         return logger.end(array)
//     divider = array[random.randint(0, len(array) - 1)]
//
//     less = [i for i in array[1:] if i <= divider]
//     greater = [i for i in array[1:] if i > divider]
//
//     return logger.end([*quick_sort(less), divider, *quick_sort(greater)])

// groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
