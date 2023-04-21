from logger import Logger
from tree import tree

# initialization

logger = Logger()

# main code

def reverse_binary_tree(root):
    logger.start()
    queue = [root]
    while queue:
        elem = queue.pop(0)
        elem.left, elem.right = elem.right, elem.left
        if elem.left:
            queue.append(elem.left)
        if elem.right:
            queue.append(elem.right)
    return root


# function call

# tree_includes(a, 'e')

new_tree = reverse_binary_tree(tree.root)

new_tree.print_tree()
