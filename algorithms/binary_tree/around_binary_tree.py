from logger import Logger
from binary_tree_params import tree

# initialization

logger = Logger()

sum = 0

# main code

def around_binary_tree(tree):
    global sum
    logger.start()

    sum += tree['v']

    if not tree.get('c'):
        return

    for child in tree['c']:
        around_binary_tree(child)



def start(tree):
    logger.start()
    for child in tree:
        around_binary_tree(child)
    return logger.end(sum)



# function call

start(tree)