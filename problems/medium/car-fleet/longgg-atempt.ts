interface Fleet {
  members: number[]
  speed: number
  id?: string
}

function carFleet(target: number, position: number[], speed: number[]): number {
  let minDest = Math.min(...position)
  const fleets: Map<string, Fleet> = new Map()
  let fleetsMembers = 0
  let endLoop = false

  // eslint-disable-next-line
  while (true) {
    console.log(`position: ${position}`)

    const existing: Map<number, Fleet> = new Map()
    for (let i = 0; i < position.length; i++) {
      if (position[i] <= target) {
        const fleet: Fleet = getExisting(existing, position[i])
        fleet.members.push(i)
        fleet.speed = Math.min(speed[i], fleet.speed)
        position[i] = position[i] + fleet.speed
      }
    }

    existing.forEach((fleet, key) => {
      if (fleet.members.length > 1 && !fleets.has(fleet.members.join('_'))) {
        fleets.set(fleet.members.join('_'), fleet)
        fleetsMembers += fleet.members.length
      }
    })

    minDest = Math.min(...position)
    if (endLoop) {
      break
    }
    if (minDest >= target) {
      endLoop = true
    }
  }

  return position.length - fleetsMembers + fleets.size
}

const getExisting = (existing: Map<number, Fleet>, position: number): Fleet => {
  if (!existing.has(position)) {
    const newFleet: Fleet = {
      members: [],
      speed: Infinity
    }
    existing.set(position, newFleet)
  }
  return existing.get(position) as Fleet
}

// I want to become a farmer.
