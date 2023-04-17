from logger import Logger

# initialization

logger = Logger()

# input parameters

array = range(10 ** 10)
target = 96


# main code

def binary_search_recursion(array, target, low=0, high=len(array) - 1):
    logger.start()
    if (low > high):
        return None

    mid = (low + high) // 2
    guess = array[mid]

    if guess == target:
        return logger.end(guess)

    if guess < target:
        return binary_search_recursion(array, target, mid + 1, high)

    if guess > target:
        return binary_search_recursion(array, target, low, mid - 1)


# function call

binary_search_recursion(array, target)
