const groupAnagrams = (strs: string[]): string[][] => {
  const sorted: string[] = []
  for (const str of strs) {
    sorted.push(quickSort(str))
  }
  const map: Record<string, string[]> = {}
  for (const [i, element] of sorted.entries()) {
    const k = map[element] || []
    k.push(strs[i])
    map[element] = k
  }

  return Object.values(map)
}

const quickSort = (tmp: string): string => {
  // example: tan
  if (tmp.length < 2) {
    return tmp
  }
  const divider = tmp[0].charCodeAt(0)
  let less = ''
  let greater = ''

  for (const char of tmp.slice(1)) {
    if (char.charCodeAt(0) <= divider) {
      less += char
    } else {
      greater += char
    }
  }

  return quickSort(less) + String.fromCharCode(divider) + quickSort(greater)
}
