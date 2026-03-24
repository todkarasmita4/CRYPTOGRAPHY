function railFenceEncrypt(text, rails) {
  let fence = Array.from({ length: rails }, () => []);
  let dir = 1, row = 0;

  for (let char of text) {
    fence[row].push(char);
    row += dir;

    if (row === 0 || row === rails - 1) dir *= -1;
  }

  return fence.flat().join('');
}