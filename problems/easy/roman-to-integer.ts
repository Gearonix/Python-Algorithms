function romanToInt(str: string): number {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let result = 0
  for (let i = 0; i < str.length; i++) {
    const letter = str[i] as keyof typeof roman
    const next = str[i + 1] as keyof typeof roman
    const dimensions = [4, 9].map((num) => {
      return num * 10 ** (roman[letter].toString().length - 1)
    })

    if (dimensions.includes(roman[next] - roman[letter])) {
      result -= roman[letter]
    } else {
      result += roman[letter]
    }
  }

  return result
}
