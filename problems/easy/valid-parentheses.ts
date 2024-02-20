function isValid(str: string): boolean {
  const bracketsMap: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  const openBrackets: string[] = []

  for (const bracket of str) {
    if (['(', '[', '{'].includes(bracket)) {
      // add to start
      openBrackets.unshift(bracket)
    } else {
      // remove from start
      const first = openBrackets.shift()

      if (first !== bracketsMap[bracket]) {
        // invalid
        return false
      }
    }
  }

  return openBrackets.length === 0
}
