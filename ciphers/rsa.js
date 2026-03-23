function rsaEncrypt(m, p, q, e) {
  let n = p * q;
  return Math.pow(m, e) % n;
}