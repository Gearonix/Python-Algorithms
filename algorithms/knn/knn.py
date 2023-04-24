from logger import Logger
import math

# initialization

logger = Logger()


# input parameters

cords = [[3, 4], [4, 3], [2, 5]]

distances = []

# main code

def pyth_formula(prev, current):
    currentX, currentY = current
    prevX, prevY = prev

    diffX = currentX - prevX
    diffY = currentY - prevY

    return round(math.sqrt(diffX ** 2 + diffY ** 2), 1)

def knn(cords):
    logger.start()
    for idx in range(len(cords)):
        if idx == 0:
            continue
        user = cords[idx]
        previous_user = cords[idx - 1]
        distance = pyth_formula(previous_user, user)
        distances.append(distance)

    return logger.end(distances)








# function call

knn(cords)