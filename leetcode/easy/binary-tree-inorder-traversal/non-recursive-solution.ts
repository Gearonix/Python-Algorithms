import TreeNode from './initialization'

function inorderTraversal(root: TreeNode | null): number[] {
  let stack: TreeNode[] = [root]
  const result: number[] = []

  while (stack.length) {
    const current = stack[stack.length - 1]
    if (current.left) {
      stack.push(current.left)
    } else {
      result.push(current.val)
      stack.pop()
      if (current.right) {
        stack.push(current.right)
      }
    }
  }

  return result
}

