function isValid(str: string): boolean {
  const bracketsMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  const openBrackets: any[] = []
  let finalCondition = false


  str.split('').forEach((bracket, idx, array) => {
    if (['(', '[', '{'].includes(bracket as any)) {
      openBrackets.push(bracket)
      // @ts-ignore
    } else if (openBrackets.pop() !== bracketsMap[bracket]) {
      finalCondition = true
    }
  })
  console.log(openBrackets)
  return !openBrackets.length && !finalCondition
}
