from logger import Logger
import string

# initialization

logger = Logger()

# input parameters

states_needed = set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])

stations = {}
stations["kone"] = set(["id", "nv", "ut"])
stations["ktwo"] = set(["wa", "id", "mt"])
stations["kthree"] = set(["or", "nv", "ca"])
stations["kfour"] = set(["nv", "ut"])
stations["kfive"] = set(["ca", "az"])

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
        # stations.pop(best_station)

    return logger.end(final_stations)


# function call

greedy_algorithm()
