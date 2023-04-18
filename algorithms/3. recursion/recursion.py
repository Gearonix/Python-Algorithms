from logger import Logger
import sys

# initialization

logger = Logger()

# input parameters

x = 100

array = [5, 6, 7, 2, 4, 9, 3]


# main code

def factorial(x):
    logger.start()
    print(x)
    if x == 1:
        return x
    return logger.end(x * factorial(x - 1))


def sum(x):
    logger.start()
    if x == 1:
        return x

    result = x + sum(x - 1)
    return logger.end(result)


def recursive_max(array):
    logger.start()
    max_number = array[0]


class RecursiveMax:
    def __init__(self, array):
        self.max_number = array[0]
        self.list = array[1:]

    def call(self):
        logger.start()
        if (len(self.list) == 0):
            return logger.end(self.max_number)

        if (self.list[0] > self.max_number):
            self.max_number = self.list[0]

        self.list = self.list[1:]

        self.call()


def recursive_max_as_function(array, max_number=array[0]):
    if (len(array) == 0):
        return max_number

    if (array[0] > max_number):
        return recursive_max_as_function(array[1:], array[0])

    return recursive_max_as_function(array[1:], max_number)


def sub_max(array):
    logger.start()
    if len(array) == 2:
        [first, second] = array
        final_result = first if first > second else second
        return logger.end(final_result)

    result = sub_max(array[1:])
    return array[0] if array[0] > result else result


# logger.start()
#    sorted_array = []
#    for i in range(len(array)):
#        min_number = array_min(array)
#        array.pop(array.index(min_number))
#        sorted_array.append(min_number)
#    return logger.end(sorted_array)

def recursive_section_sort(array, sorted=[]):
    logger.start()
    if len(array) == 0:
        return logger.end(sorted)

    max_number = max(array)

    array.pop(array.index(max_number))
    sorted.append(max_number)

    return recursive_section_sort(array, sorted)


def fib(n, prev2 = 0, prev1 = 1):
    logger.start()
    if n == 0:
        return logger.end(prev2)
    return fib(n - 1, prev1, prev2 + prev1)


# function call

# recursiveMax = RecursiveMax(array)

# recursiveMax.call()


# recursive_max_as_function(array)

# factorial(x)
# sum(x)

# recursive_section_sort(array)

fib(22)