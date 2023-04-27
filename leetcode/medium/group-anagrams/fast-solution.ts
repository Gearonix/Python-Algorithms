const groupAnagrams = (strs: string[]): string[][] => {
  const sorted: string[] = []
  for (let str of strs) {
    sorted.push(quickSort(str))
  }
  const map: Record<string, string[]> = {}
  for (let i = 0; i < sorted.length; i++) {
    const k = map[sorted[i]] || []
    k.push(strs[i])
    map[sorted[i]] = k
  }

  return Object.values(map)
}

const quickSort = (tmp: string): string => { // example: tan
  if (tmp.length < 2) {
    return tmp
  }
  const divider = tmp[0].charCodeAt(0)
  let less = ''
  let greater = ''

  for (let char of tmp.slice(1)) {
    if (char.charCodeAt(0) <= divider) {
      less += char
    } else {
      greater += char
    }
  }

  return quickSort(less) + String.fromCharCode(divider) + quickSort(greater)
}
