from logger import Logger
import string

# initialization

logger = Logger()

# input parameters

states_needed = set(string.ascii_lowercase)

stations = {}
stations["kone"] = set(["a", "b", "c", 'p','k', 'g', 'z', 'w', 'f', 'i'])
stations["ktwo"] = set(["d", "b", "q", 't'])
stations["kthree"] = set(["v", "s", "a", "c",' j', 'h', 'y','w','f','u','z'])
stations["kfour"] = set(["u", "r", 'o', 'j', 'n', 'x','e'])
stations["kfive"] = set(["r", "m",' l', 'x', 'n','l', 'd', 'q'])

final_stations = set()


# main code

def greedy_algorithm():
    global states_needed
    logger.start()

    while states_needed:
        print()
        print('reset')
        print(f'States needed: {states_needed}')
        best_station = None
        states_covered = set()

        for station, station_states in stations.items():
            covered = states_needed & station_states
            print(f'{station}: {covered}')
            if len(covered) > len(states_covered):
                best_station = station
                states_covered = covered

        final_stations.add(best_station)
        states_needed -= states_covered
        stations.pop(best_station)

    return logger.end(final_stations)


# function call

greedy_algorithm()
