// 正则可得好好学下
// 函数名得试出来
const numJewelsInStones = function(jewels, stones) {
  let length = 0;
  for (const j of jewels) {
    const list = stones.split(j);
    length += list.length - 1;
  }
  return length;
};

console.log(hasJewelsLength("z", "ZZ"));
