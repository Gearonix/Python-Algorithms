function isValidSudoku(rows: string[][]): boolean {
  const columns: string[][] = Array.from(new Array(rows.length), () => [])
  for (const [i, row] of rows.entries()) {
    if (containsDuplicate(row, columns)) {
      return false
    }
  }
  for (const column of columns) {
    if (containsDuplicate(column)) {
      return false
    }
  }
  const fields: string[][] = rowsToFields(rows)
  for (const field of fields) {
    if (containsDuplicate(field)) {
      return false
    }
  }

  return true
}

function containsDuplicate(strs: string[], columns?: string[][]): boolean {
  const existing: string[] = []
  let isDuplicate = false
  for (const [i, str] of strs.entries()) {
    if (columns) {
      columns[i].push(str)
    }
    if (!existing.includes(str)) {
      existing.push(str)
    } else if (str !== '.') {
      isDuplicate = true
    }
  }
  return isDuplicate
}

const rowsToFields = (rows: string[][]) => {
  const fields: string[][] = []
  for (let i = 0; i < rows.length; i += 3) {
    for (let j = 0; j < rows.length; j += 3) {
      fields.push([
        ...rows[i].slice(j, j + 3),
        ...rows[i + 1].slice(j, j + 3),
        ...rows[i + 2].slice(j, j + 3)
      ])
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
