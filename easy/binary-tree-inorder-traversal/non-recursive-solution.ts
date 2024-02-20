import { TreeNode } from 'data-structures'

function inorderTraversal(root: TreeNode): number[] {
  const stack: TreeNode[] = [root]
  const result: number[] = []

  while (stack.length > 0) {
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
