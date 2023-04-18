from logger import Logger

# initialization

logger = Logger()


# input parameters

graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thoms", "jonny"]
graph["anuj"] = []
graph["peggy"] = ["alice"]
graph["thoms"] = []
graph["jonny"] = []




# main code

def person_is_seller(name):
    return name[-1] == 'm'

def breadth_first_search(person):
    logger.start()

    checked = []
    queue = graph[person]

    while queue:
        node = queue.pop(0)
        if person_is_seller(node):
            return logger.end(True)

        if node not in checked:
            queue += graph[node]
            checked.append(node)


    return logger.end(False)


# function call

breadth_first_search('you')

