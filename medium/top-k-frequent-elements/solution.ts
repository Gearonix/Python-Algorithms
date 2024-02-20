function topKFrequent(nums: number[], k: number): number[] {
  const hashmap: Record<number, number> = {}
  for (const num of nums) {
    hashmap[num] = (hashmap[num] || 0) + 1
  }
  return Object.keys(hashmap)
    .sort((a, b) => hashmap[Number(b)] - hashmap[Number(a)])
    .slice(0, k)
    .map(Number)
}
// Bucket sort:
// const result = []
// for (let i = 0; i <= nums.length; i++) {
//     result[nums[i]] = (result[nums[i]] || 0) + 1
// }

//
// const countMap = new Map<number,number>();
// nums.forEach((num) => {
//     countMap.set(num, (countMap.get(num) || 0) + 1);
// })
// const buckets = [];
// // add counts into buckets
// countMap.forEach((value, key) => {
//     // console.log(count, num)
//     buckets[value] = (buckets[value] || []);
//     buckets[value].push(key)
// })
