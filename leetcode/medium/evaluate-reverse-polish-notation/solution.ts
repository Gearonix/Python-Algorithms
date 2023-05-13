function evalRPN(tokens: string[]): number {
  if (!tokens) {
    return 0
  }

  const operators = ['*', '/', '+', '-']

  const stack: number[] = []

  for (let i = 0; i < tokens.length; i++) {
    const char = tokens[i]

    if (operators.includes(char)) {
      let first = stack.pop()
      let second = stack.pop()

      const result: number = eval(`${second} ${char} ${first}`)

      stack.push(floorNum(result))
    }
    else {
      stack.push(Number(char))
    }
  }

  return stack[0]
}

const floorNum = (num: number): number => {
  return num < 0 ? Math.ceil(num) : Math.floor(num)
}


export {}


