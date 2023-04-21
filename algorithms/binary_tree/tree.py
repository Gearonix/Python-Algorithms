class BinaryTree:
    def __init__(self, root):
        self.root = Node(root)

    def add(self, parent, child, mode):
        parent_node = self.find(parent)
        child_node = self.find(child)

        if not parent_node:
            raise Exception('Parent not found')
        if child_node:
            raise Exception('Child already created')

        if mode == 'left':
            parent_node.left = Node(child)
        elif mode == 'right':
            parent_node.right = Node(child)



    def find(self, target):
        # BFS

        checked = []
        queue = [self.root]

        while queue:
            node = queue.pop(0)
            if node.value == target:
                return node

            if node not in checked:
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

                checked.append(node)


class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
    def print_tree(self):
        if self.left:
            self.left.print_tree()
        if self.right:
            self.right.print_tree()
        print(self.value)

tree = BinaryTree('a')
tree.add('a','b','left')
tree.add('a','c','right')
tree.add('b','d','left')
tree.add('b','e','right')
tree.add('c','f','right')

