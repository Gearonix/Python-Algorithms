import { TreeNode } from 'data-structures'

type Nil<T> = null | T

const isSymmetric = (root: TreeNode): boolean => {
  const { left, right } = root
  if (left?.val !== right?.val) {
    return false
  }
  const result = startSymmetric(left, right)
  return result
}

const startSymmetric = (
  leftNode: Nil<TreeNode> = null,
  rightNode: Nil<TreeNode> = null
): boolean => {
  if (
    leftNode?.left?.val !== rightNode?.right?.val ||
    leftNode?.right?.val !== rightNode?.left?.val
  ) {
    return false
  }

  if (!leftNode?.left && !leftNode?.right) {
    return true
  }

  const leftChild = startSymmetric(leftNode.left, rightNode?.right)
  const rightChild = startSymmetric(leftNode.right, rightNode?.left)

  return leftChild && rightChild
}
