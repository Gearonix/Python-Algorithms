from logger import Logger

# initialization

logger = Logger()

class LinkedList:
    def __init__(self):
        self.root = None
        self.size = 0
    def add(self, value):

        current = self.root

        if not current:
            self.root = Node(value)
            self.size += 1
            return

        while current.next:
            current = current.next

        current.next = Node(value)
        self.size += 1
    def get(self):
        list = []

        current = self.root

        if not current:
            return print(list)

        while current:
            list.append(current.value)
            current = current.next

        return print(list)
    def get_size(self):
        return print(self.size)

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

list = LinkedList()


list.add(2)
list.add(23)

list.get()

list.get_size()