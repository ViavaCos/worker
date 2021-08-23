// 密集型计算
function  fb(num) {
  if(!+num) throw new TypeError('Params is invalid.')
  if (num == 1 || num == 2) {
    return 1
  };
  return fb(num - 2) + fb(num - 1);
}