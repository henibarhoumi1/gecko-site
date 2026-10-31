// Page titles carry the pink marker under their last words: split a title into the plain start and the marked end.
export const mark = (title: string, n = 2): [string, string] => {
  const w = title.split(' ');
  if (w.length <= n) return ['', title];
  return [w.slice(0, -n).join(' ') + ' ', w.slice(-n).join(' ')];
};
