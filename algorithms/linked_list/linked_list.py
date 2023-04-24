class LinkedList:
    def __init__(self):
        self.root = None
        self.size = 0

    def add(self, value):
        new_node = Node(value)
        current = self.root

        if not current:
            self.root = new_node
            self.size += 1
            return

        while current.next:
            current = current.next

        current.next = new_node
        self.size += 1

    def list(self):
        list = []

        current = self.root

        while current:
            list.append(current.value)
            current = current.next

        return list

    def includes(self, target):
        current = self.root

        while current:
            if current.value == target:
                return True
            current = current.next

        return False

    def get_size(self):
        return self.size

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

list = LinkedList()


list.add(2)
list.add(23)

list.list()

list.get_size()

print(list.includes(2))
print(list.includes(22))