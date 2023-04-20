from logger import Logger

# initialization

logger = Logger()


# input parameters

array = [5, 3, 4, 6, 8, 5, 7, 2, 3, 12]


# main code

def bubble_sort(array):
    logger.start()

    for i in range(len(array) - 1):
        print()
        print(f'i: {array[i]}')
        for j in range(len(array) - i - 1):
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]
            print(array)
    return logger.end(array)


# function call

bubble_sort(array)