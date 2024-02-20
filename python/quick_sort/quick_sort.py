from logger import Logger
import random
from time import time

random_list = []
for i in range(0, 10000):
    n = random.randint(1, 30)
    random_list.append(n)

print(random_list)
# initialization

logger = Logger()

# input parameters

reversedArray = range(100)[::-1]
array = random_list

# main code

count = 0


def quick_sort(array):
    # O(n * log(n))
    global count
    count += 1
    logger.start()
    if len(array) < 2:
        return logger.end(array)
    divider = array[random.randint(0, len(array) - 1)]

    less = [i for i in array[1:] if i <= divider]
    greater = [i for i in array[1:] if i > divider]

    return logger.end([*quick_sort(less), divider, *quick_sort(greater)])


# function call

start_time = time()
quick_sort(reversedArray)
print(time() - start_time)
