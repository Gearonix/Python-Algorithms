from logger import Logger

# initialization

logger = Logger()

# input parameters

box = [[[[[['Goal']]]]]]

# main code

attempts = 0


def box_in_box(box):
    global attempts
    logger.start()
    attempts += 1
    if 'Goal' in box:
        return logger.end(attempts)
    box_in_box(box[0])


# function call

box_in_box(box)
