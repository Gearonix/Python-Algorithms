from logger import Logger

# initialization

logger = Logger()


# input parameters

items = [[1500, 1], [3000, 4], [2000, 3], [2000, 1]]

sizes = [1, 2, 3, 4]

# main code


def dynamic_programming(items):
    logger.start()
    table = []

    for row in range(len(items)):
        item_price, item_weight = items[row]
        table.append([])

        for current_size in range(4):

            try:
                prev_max_price = table[row - 1][current_size]
            except IndexError:
                prev_max_price = None

            # fits in a backpack
            if item_weight - 1 <= current_size:
                difference = current_size - item_weight

                if difference >= 0 and prev_max_price:
                    summary_price = item_price + table[row - 1][difference]
                    table[row].append(summary_price)
                else:
                    table[row].append(item_price)

            # not fits in a backpack
            else:
                table[row].append(prev_max_price)

    return logger.end(table)


# function call

dynamic_programming(items)