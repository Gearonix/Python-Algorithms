from logger import Logger
from time import time

# initialization

logger = Logger()

# input parameters

# array = [5, 3, 4, 6, 8, 5, 7, 2, 3, 12]
array = [*range(10000)]

# main code

# O(n**2)

count = 0


def array_min(array):
    global count

    min_number = array[0]
    for item in array:
        count += 1
        if item < min_number:
            min_number = item
    return min_number


def section_sort(array):
    logger.start()
    sorted_array = []
    for i in range(len(array)):
        min_number = array_min(array)
        array.pop(array.index(min_number))
        sorted_array.append(min_number)
    return logger.end(sorted_array)


# function call

start_time = time()
section_sort(array)
print(time() - start_time)
