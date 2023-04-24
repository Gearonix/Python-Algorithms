from logger import Logger

# initialization

logger = Logger()


# input parameters

# main code

def gcd(a, b):
    logger.start()
    while a != 0 and b != 0:
        if a > b:
            a = a % b
        else:
            b = b % a
    return logger.end(max(a, b))


# function call

gcd(231, 15)