from logger import Logger
from tree import tree

# initialization

logger = Logger()

def tree_includes(root, target):
    logger.start()
    queue = [root]
    while queue:
        elem = queue.pop(0)
        if elem.value == target:
            return logger.end('found')
        if elem.left:
            queue.append(elem.left)
        if elem.right:
            queue.append(elem.right)


    return logger.end('not found')



def start_recusion(root, target):
    logger.start()
    queue = [root]
    total_sum = 0
    result = recursive_tree_includes(root, target, queue, total_sum)
    return logger.end(result)




def recursive_tree_includes(root, target, queue = [], total_sum = 0):
    if len(queue) == 0:
        return 'not found'

    elem = queue.pop(0)
    if elem.value == target:
        return 'found'

    if elem.left:
        queue.append(elem.left)
    if elem.right:
        queue.append(elem.right)

    result = recursive_tree_includes(root, target, queue, total_sum)
    return result


# function call

# tree_includes(a, 'e')
start_recusion(tree.root, 'e')