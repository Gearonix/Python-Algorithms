import { TreeNode } from 'data-structures'

type N<T> = null | T

const isSymmetric = (root: TreeNode): boolean => {
  const { left, right } = root
  if (left?.val !== right?.val) {
    return false
  }
  const result = startSymmetric(left, right)
  console.log('Result ', result)
  return result
}

const startSymmetric = (leftNode: N<TreeNode> = null, rightNode: N<TreeNode> = null): boolean => {
  // if not symmetric
  if (leftNode?.left?.val !== rightNode?.right?.val ||
        leftNode?.right?.val !== rightNode?.left?.val) {
    console.log('NOT_SYMMETRIC')
    return false
  }

  if (!leftNode?.left && !leftNode?.right) {
    console.log('NODE_IS_SYMMETRIC')
    return true
  }

  const leftChild = startSymmetric(leftNode?.left, rightNode?.right)
  console.log('Left ', leftChild)
  const rightChild = startSymmetric(leftNode?.right, rightNode?.left)
  console.log('Right ', rightChild)

  return leftChild && rightChild
}
