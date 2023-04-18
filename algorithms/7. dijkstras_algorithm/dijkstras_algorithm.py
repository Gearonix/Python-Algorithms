from logger import Logger
from dijkstras_params import graph

# Dijkstras algorithm

# initialization


logger = Logger()

INF = float('inf')

# main code

def lowest_node(hashmap, processed):
    try:
        min_value = min([value for [key, value] in hashmap.items() if key not in processed])
        for [key, value] in hashmap.items():
            if value == min_value:
                return key
    except ValueError:
        return None

def create_graph_path(parents):
    result = []
    node = parents['end']
    while node != 'start':
        result.append(node)
        node = parents[node]
    return ['start', *result[::-1], 'end']


def create_costs_and_parents(graph):
    costs = graph['start']
    for node in graph.keys():
        if node not in costs and node != 'start':
            costs[node] = INF

    parents = {}

    for node in graph.keys():
        if node == 'start':
            continue
        node_value = graph['start'][node]
        parents[node] = 'start' if node_value != INF else None

    return [costs, parents]


def dijkstras_algorithm(graph):

    [costs, parents] = create_costs_and_parents(graph)

    logger.start()
    processed = []

    node = lowest_node(costs, processed)

    while node:
        cost = costs[node]
        neighbors = graph[node]

        for n in neighbors.keys():
            new_cost = cost + neighbors[n]

            if new_cost < costs[n]:
                costs[n] = new_cost
                parents[n] = node

        processed.append(node)
        node = lowest_node(costs, processed)

    result = {
        'cost': costs['end'],
        'parents': create_graph_path(parents)
    }

    return logger.end(result)

# function call

dijkstras_algorithm(graph)

