def bellman_ford(graph, start_pos):
    distance, parents = {}, {}

    for node in graph:
        distance[node], parents[node] = float('inf'), None
    distance[start_pos] = 0

    # {'v1': 0, 'v2': inf, 'v3': inf, 'v4': inf}
    # {'v1': None, 'v2': None, 'v3': None, 'v4': None}

    for _ in range(len(graph) - 1):
        for node in graph:
            for neighbour in graph[node]:
                # if distance v2 > v1 + v1(v2)
                # if add + add path < general
                if distance[neighbour] > distance[node] + graph[node][neighbour]:
                    distance[neighbour], parents[neighbour] = distance[node] + graph[node][neighbour], node

    return distance, parents


graph = {
    'v1': {'v2': 2, 'v3': 5},
    'v2': {'v4': 2},
    'v3': {'v2': -4},
    'v4': {},
}

distance, parents = bellman_ford(graph, start_pos='v1')

print(distance)
print(parents)