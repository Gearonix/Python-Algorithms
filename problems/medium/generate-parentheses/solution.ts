const generateParenthesis = (
  limit: number,
  combo = '(',
  opened = 1,
  closed = 0
): string[] => {
  if (opened === limit && closed === opened) {
    return [combo]
  }

  const combos = []
  if (opened < limit) {
    combos.push(...generateParenthesis(limit, combo + '(', opened + 1, closed))
  }
  if (closed < opened) {
    combos.push(...generateParenthesis(limit, combo + ')', opened, closed + 1))
  }

  return combos
}
