class MinStack {
  stack: number[] = []
  minValues: number[] = [Infinity]

  push(val: number): void {
    this.stack.push(val)
    const prevMin = this.minValues.at(-1) as number
    this.minValues.push(Math.min(prevMin, val))
  }

  pop(): void {
    this.stack.pop()
    this.minValues.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.minValues.at(-1) as number
  }
}

export {}
