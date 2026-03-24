function modExp(base, exp, mod) {
  let result = 1;
  while (exp > 0) {
    if (exp % 2 === 1) result = (result * base) % mod;
    base = (base * base) % mod;
    exp = Math.floor(exp / 2);
  }
  return result;
}

function rsaEncrypt(m, p, q, e) {
  let n = p * q;
  return modExp(m, e, n);
}