from logger import Logger

# initialization

logger = Logger()

# input parameters

y = 10
x = 2780


# main code

def divide_and_conquer(x, y):
    logger.start()
    remainder = x % y

    if (remainder == 0):
        return logger.end(f'{y} x {y}')

    divide_and_conquer(y, remainder)


# function call

divide_and_conquer(x, y)
