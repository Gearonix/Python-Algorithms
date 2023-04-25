function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  const queue = [root]
  const levels = [1]
  let prevLvl
  while (queue.length) {
    const tmp = queue.shift()
    prevLvl = levels.shift() as number
    if (tmp?.left) {
      queue.push(tmp.left)
      levels.push(prevLvl + 1)
    }
    if (tmp?.right) {
      queue.push(tmp.right)
      levels.push(prevLvl + 1)
    }
  }
  return prevLvl as number
}
