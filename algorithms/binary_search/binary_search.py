from logger import Logger

# initialization

logger = Logger()

# input parameters

array = range(10 ** 10)
target = 96


# main code
def binary_search(array, target):
    logger.start()

    low = 0
    high = len(array) - 1

    while low <= high:
        mid = (low + high) // 2
        guess = array[mid]
        if guess == target:
            return logger.end(guess)
        if guess < target:
            low = mid
        if guess > target:
            high = mid


# function call

binary_search(array, target)
