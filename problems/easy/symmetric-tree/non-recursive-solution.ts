import { TreeNode } from 'data-structures'

type Nil<T> = null | T | undefined
type Elem = [Nil<TreeNode>, Nil<TreeNode>]

const isSymmetric = (root: TreeNode): boolean => {
  const stack: Elem[] = [[root.left, root.right]]
  while (stack.length > 0) {
    console.log(stack)

    const [left, right] = stack.shift() as Elem
    if (left?.val !== right?.val) {
      return false
    }
    if (left?.left || right?.right) {
      stack.unshift([left?.left, right?.right])
    }
    if (left?.right || right?.left) {
      stack.unshift([left?.right, right?.left])
    }
  }
  return true
}
