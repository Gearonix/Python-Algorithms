import { TreeNode } from 'data-structures'

function dfsMaxDepth(tmp: TreeNode | null | undefined): number {
  if (!tmp) {
    return 0
  }
  const leftCount = maxDepth(tmp?.left)
  const rightCount = maxDepth(tmp?.right)
  return 1 + Math.max(leftCount, rightCount)
}
