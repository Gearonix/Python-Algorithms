from logger import Logger

# initialization

logger = Logger()

# input parameters

graph = {
    '5': ['3', '7'],
    '3': ['2', '4'],
    '7': ['8'],
    '2': [],
    '4': ['8'],
    '8': []
}

visited = []

its = 0

def dfs(node):
    global its
    if node == '8':
        return print(its)
    if node not in visited:
        its += 1
        visited.append(node)
        for neighbour in graph[node]:
            dfs(neighbour)


def non_recusrive_dfs(node):
    global its
    queue = graph[node]
    while queue:
        child = queue.pop(0)
        if child == '8':
            return print('done')

        if node not in visited:
            queue = [*set([*graph[child], *queue])]
            visited.append(child)

# function call

non_recusrive_dfs('5')
