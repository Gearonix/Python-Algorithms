from time import time

class Logger:
    start_time = 0
    def start(self):
        print('Process started.')

        self.start_time = time()
    def end(self, result):
        difference = round(time() - self.start_time, 4)

        print()
        print(f'Process completed: {difference}ms')
        print(f'Result: {result}')

        return result
    def input(self):
        return int(input('Enter the number: '))
