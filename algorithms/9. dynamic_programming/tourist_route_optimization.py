from logger import Logger

# initialization

logger = Logger()


# input parameters

times = {
    'half': 0.5,
    'one': 1,
    'onehalf': 1.5,
    'two': 2
}

attractions = {
    'att1': {
        'time': times['half'],
        'rating': 7
    },
    'att2': {
        'time': times['half'],
        'rating': 6
    },
    'att3': {
        'time': times['one'],
        'rating': 9
    },
    'att4': {
        'time': times['two'],
        'rating': 9
    },
    'att5': {
        'time': times['half'],
        'rating': 8
    }
}

table = []

# main code

def hashmap_foreach(hashmap, callback):
    for idx in range(len(attractions.keys())):
        item = [*attractions.values()][idx]
        name = [*attractions.keys()][idx]
        callback(item, name, idx)

def find_by_value(hashmap, value):
    for hash_key, hash_value in hashmap.items():
        if hash_value == value:
            return hash_key

def foreach_attractions(att, att_name, att_idx):
    table.append({})
    print()

    for time_idx in range(len(times.keys())):
        time = [*times.keys()][time_idx]
        time_remainder = find_by_value(times, float(times[time]) - att['time'])
        print(float(times[time]) - att['time'])
        print(time_remainder)
        try:
            previous_att = table[att_idx - 1][time]
        except:
            previous_att = 0

        # if in
        if att['time'] <= times[time]:
            if att_idx == 2 and time_idx == 1:
                print(att['rating'])
            # and att['rating'] > previous_att
            # summary_rating =  att['rating']
            if att_idx > 0 and time_idx > 0 and time_remainder:
                difference = table[att_idx - 1][time_remainder]
                summary = difference + att['rating']
                if summary > previous_att:
                    table[att_idx][time] = summary
                else:
                    table[att_idx][time] = max(att['rating'], previous_att)
            else:
                table[att_idx][time] = max(att['rating'], previous_att)
        # if not in
        else:
            table[att_idx][time] = previous_att


def tourist_route_optimization(attractions):
    logger.start()
    hashmap_foreach(attractions, foreach_attractions)

    result = list(table[-1].values())[-1]
    return logger.end(result)


# function call

tourist_route_optimization(attractions)