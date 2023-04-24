HASHTABLE_CAPACITY = 50


class HashTable:
    def __init__(self):
        self.capacity = HASHTABLE_CAPACITY
        self.size = 0
        self.cells = [None] * self.capacity
    def hash(self, key):
        hashsum = 0
        for idx, str in enumerate(key):

            hashsum += (idx + len(key)) ** ord(str)
            hashsum = hashsum % self.capacity
        return hashsum
    def add(self, key, value):
        self.size += 1
        index = self.hash(key)
        node = self.cells[index]

        if not node:
            self.cells[index] = Node(key, value)
            return
        while node.next:
            node = node.next
        node.next = Node(key, value)


    def get(self, key):
        index = self.hash(key)

        node = self.cells[index]
        if not node:
            return None

        while node.next:
            node = node.next
        return node.value

    def get_size(self):
        return self.size

    def remove(self, key):
        index = self.hash(key)
        node = self.cells[index]

        if not node:
            return None

        self.size -= 1
        self.cells[index] = None

    def values(self):
        values = [i.value for i in self.cells if i]
        return values

    def keys(self):
        keys =  [i.key for i in self.cells if i]
        return keys





class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None

hashtable = HashTable()
hashtable.add('test', 'val')
print(hashtable.keys())
print(hashtable.values())