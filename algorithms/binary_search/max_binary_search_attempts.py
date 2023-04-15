from logger import Logger

# initialization

logger = Logger()

# input parameters

target = logger.input()

# main code

def max_binary_search_attempts(target):
    # log2 target = result
    logger.start()

    guess = 2
    count = 1
    while guess != target:
        guess *= 2
        count += 1

    return logger.end(count)


# function call

max_binary_search_attempts(target)