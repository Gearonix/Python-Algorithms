function isValidSudoku(rows: string[][]): boolean {
  const cols: string[][] = Array.from(Array(rows.length), () => [])
  for (let i = 0; i < rows.length; i++) {
    if (containsDuplicate(rows[i], cols)) {
      return false
    }
    if (i % 3 == 0) {
      for (let j = 0; j < rows.length; j += 3) {
        if (containsDuplicate([...rows[i].slice(j, j + 3),
          ...rows[i + 1].slice(j, j + 3),
          ...rows[i + 2].slice(j, j + 3)])) {
          return false
        }
      }
    }
  }
  for (let i = 0; i < cols.length; i++) {
    if (containsDuplicate(cols[i])) {
      return false
    }
  }
  return true
}


function containsDuplicate(strs: string[], cols?: string[][]): boolean {
  const existing: string[] = []
  let isDuplicate = false
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    if (cols) {
      cols[i].push(str)
    }
    if (!existing.includes(str)) {
      existing.push(str)
    } else {
      if (str !== '.') {
        isDuplicate = true
      }
    }
  }
  return isDuplicate
}

export {}
