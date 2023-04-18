from logger import Logger

# initialization

logger = Logger()


# input parameters

items = {
    'product1': {
        'weight': 30,
        'cost': 3000
    },
    'product2': {
        'weight': 20,
        'cost': 2000
    },
    'product3': {
        'weight': 15,
        'cost': 1500
    }
}

max_weight = 35

processed = []

# main code

def find_max_product(items):
    costs = list(map(lambda x: x['cost'], items.values()))
    try:
        max_number = max([i for i in costs if i not in processed])
        for i in items.values():
            if i['cost'] == max_number:
                return i
    except ValueError:
        return None

def greedy_algorithm(items, weight):
    logger.start()
    total_cost = 0
    while weight > 0:
        product = find_max_product(items)
        if not product:
            break
        processed.append(product['cost'])
        if product['weight'] < weight:
            total_cost += product['cost']
            weight -= product['weight']

    return logger.end(total_cost)



# function call

greedy_algorithm(items, max_weight)