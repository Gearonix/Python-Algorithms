import { TreeNode } from 'data-structures'

function inorderTraversal(tmp: TreeNode | null): number[] {
  if (!tmp) {
    return []
  }
  const left = inorderTraversal(tmp.left)
  const right = inorderTraversal(tmp.right)
  return [...left, tmp.val, ...right]
}
