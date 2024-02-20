import { TreeNode } from 'data-structures'

const isSymmetric = (root: TreeNode): boolean => {
  return startSymmetric(root.left, root.right)
}

const startSymmetric = (
  l: TreeNode | null = null,
  r: TreeNode | null = null
): boolean => {
  if (l?.val !== r?.val) {
    return false
  }

  if (!l && !r) {
    return true
  }

  return startSymmetric(l?.left, r?.right) && startSymmetric(l?.right, r?.left)
}
