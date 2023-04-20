from logger import Logger

# initialization

logger = Logger()


# input parameters

array = [5, 3, 8, 4, 1]

# main code

def merge(left, right):
    summary = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            summary.append(left[i])
            i += 1
        else:
            summary.append(right[j])
            j += 1
    if i < len(left):
        summary += left[i:]
    if j < len(right):
        summary += right[j:]
    return summary

def merge_sort(array):
    logger.start()
    if len(array) == 1:
        return array
    divider = len(array) // 2
    left = merge_sort(array[:divider]) #[2, 3]
    right = merge_sort(array[divider:]) #[5, 4, 1]
    return logger.end(merge(left, right))




# function call

merge_sort(array)