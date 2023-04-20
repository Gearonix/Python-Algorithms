from logger import Logger

# initialization

logger = Logger()


# input parameters

array = [5, 3, 8, 4, 1]


# main code

def insertion_sort(array):
    logger.start()
    for i in range(1, len(array)):
        sorted = i - 1
        while sorted >= 0 and array[sorted + 1] < array[sorted]:
            array[sorted], array[sorted + 1] = array[sorted + 1], array[sorted]
            sorted -= 1
    return logger.end(array)


# function call

insertion_sort(array)