function isValidSudoku(boards: string[][]): boolean {
  const rows: string[][] = Array.from(Array(9), () => [])
  const cols: string[][] = Array.from(Array(9), () => [])
  const fields: Map<string, string[]> = new Map()

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const targ = boards[r][c]
      const fieldIdx = [Math.floor(r / 3), Math.floor(c / 3)].join('_')
      if (targ === '.') {
        continue
      }
      if (
        rows[r].includes(targ) ||
          cols[c].includes(targ) ||
          fields.get(fieldIdx)?.includes(targ)
      ) {
        return false
      }
      rows[r].push(targ)
      cols[c].push(targ)
      if (!fields.has(fieldIdx)) {
        fields.set(fieldIdx, [])
      }
      fields.get(fieldIdx)?.push(targ)
    }
  }
  return true
}

export {}
