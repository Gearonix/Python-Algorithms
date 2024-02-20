class Node:
    def __init__(self, value):
        self.value = value
        self.prev_node = None
        self.next_node = None

class Stack:
    def __init__(self):
        self.head = None
        self.size = 0

    def add(self, value):
        new_node = Node(value)
        new_node.prev_node = self.head
        self.head = new_node
        self.size += 1

    def remove(self):
        if not self.head:
            return
        self.head = self.head.prev_node
        self.size -= 1

    def get_size(self):
        return self.size

    def get(self):
        if not self.head:
            return None
        return self.head.value

stack = Stack()
stack.add('test')
stack.add('test2')
stack.add('test3')
stack.remove()
stack.remove()
print(stack.get())
