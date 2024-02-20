function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const goal = t.split('')
  for (const str of s) {
    if (goal.includes(str)) {
      goal.splice(goal.indexOf(str), 1)
    }
  }
  return goal.length === 0
}
