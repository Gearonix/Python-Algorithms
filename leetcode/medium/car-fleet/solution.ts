function carFleet(target: number, position: number[], speed: number[]): number {
  const cars = position.map((pos, i) => [pos, speed[i]])
  cars.sort((a, b) => a[0] - b[0])
  const stack : number[] = []

  for (let i = cars.length - 1; i >= 0; i--) {
    const [pos, speed] = cars[i]
    const time = (target - pos) / speed

    if (time <= stack.at(-1)) {
      continue
    }
    stack.push(time)
  }

  return stack.length
}

export {}
