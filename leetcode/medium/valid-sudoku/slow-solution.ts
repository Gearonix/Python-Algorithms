function isValidSudoku(rows: string[][]): boolean {
  const columns: string[][] = Array.from(Array(rows.length), () => [])
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i]
    if (containsDuplicate(row, columns)) {
      console.log('error rows', i)
      return false
    }
  }
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i]
    if (containsDuplicate(column)) {
      console.log('error columns')
      return false
    }
  }
  const fields: string[][] = rowsToFields(rows)
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i]
    if (containsDuplicate(field)) {
      console.log('errror fields')
      return false
    }
  }

  return true
}


function containsDuplicate(strs: string[], columns?: string[][]): boolean {
  const existing: string[] = []
  let isDuplicate = false
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    if (columns) {
      columns[i].push(str)
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

const rowsToFields = (rows : string[][]) => {
  const fields: string[][] = []
  for (let i = 0; i < rows.length; i += 3) {
    for (let j = 0; j < rows.length; j += 3) {
      fields.push([...rows[i].slice(j, j + 3),
        ...rows[i + 1].slice(j, j + 3),
        ...rows[i + 2].slice(j, j + 3)])
    }
  }
  return fields
}
//
// //
// const rows = [['5', '3', '.', '.', '7', '.', '.', '.', '.'],
//   ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//   ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//   ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//   ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9']]
//
// // isValidSudoku(board)
//

//
// rowsToFields(rows)
//
// const rowToColumn = (rows: string[][]) => {
//   const columns: string[][] = Array.from(Array(SUDOKU_SIZE), () => [])
//   for (let i = 0; i < rows.length; i++) {
//     const row = rows[i]
//     for (let j = 0; j < row.length; j++) {
//       const str = row[j]
//       console.log(columns[j])
//       console.log(columns)
//       columns[j].push(str)
//     }
//   }
//   console.log(columns)
// }
//

export {}
