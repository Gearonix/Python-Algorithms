class Node:
    def __init__(self, value):
        self.value = value
        self.prev_node = None
        self.next_node = None

class Queue:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0
    def add(self, value):
        new_node = Node(value)
        if self.size > 0:
            self.tail.prev_node = new_node
            new_node.next_node = self.tail
            self.tail = new_node
        else:
            self.head = new_node
            self.tail = new_node
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

queue = Queue()
queue.add('test')
queue.add('test2')
queue.add('test3')
queue.remove()
queue.remove()
