function diffieHellman(p, g, a, b) {
  let A = Math.pow(g, a) % p;
  let B = Math.pow(g, b) % p;
  return Math.pow(B, a) % p;
}