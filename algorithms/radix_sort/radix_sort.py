# Radix sort in Python


# Using counting sort to sort the elements in the basis of significant places
def countingSort(array, place):
    size = len(array) # 6
    # place = 1
    result = [0] * size # [0, 0, 0, 0, 0, 0]
    cells = [0] * 10 # [0, 0, ..., 0]

    # Calculate count of elements
    for i in range(0, size):
        index = array[i] // place
        cells[index % 10] += 1

    # Calculate cumulative count
    for i in range(1, 10):
        cells[i] += cells[i - 1]

    # Place the elements in sorted order
    i = size - 1
    print(cells)
    # for i = size - 1 i>=0 i--
    while i >= 0:
        index = array[i] // place
        last_num = index % 10
        tmp = cells[last_num]

        print('---',index, last_num, tmp, array[i])
        result[tmp - 1] = array[i]
        print('+++', result)
        cells[last_num] -= 1
        print('...', cells)
        i -= 1

    for i in range(0, size):
        array[i] = result[i]


# Main function to implement radix sort
def radixSort(array):
    # 633
    max_element = max(array)

    # Apply counting sort to sort elements based on place value.
    place = 1
    while max_element // place > 0:
        print('step')
        countingSort(array, place)
        place *= 10


data = [52, 89, 150, 36, 633, 233]
radixSort(data)
print(data)