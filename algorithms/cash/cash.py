from logger import Logger

# initialization

logger = Logger()


# input parameters

num = 5


# main code


def factorial(num):
    logger.start()
    fact = 1
    for i in range(1, num + 1):
        fact= fact * i
    return logger.end(fact)

cash = set()
def cash_function(func, *args):
    global cash
    logger.start()
    result = func(*args)
    if result in cash:
        print('result in cash')
        return
    cash.add(result)



# function call

# cash_function()
cash_function(factorial, num)
cash_function(factorial, 6)
cash_function(factorial, num)