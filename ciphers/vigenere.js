function vigenereEncrypt(text, key) {
  key = key.toLowerCase();
  let res = "";
  let j = 0;

  for (let i = 0; i < text.length; i++) {
    let c = text[i];

    if (/[a-z]/i.test(c)) {
      let base = c === c.toUpperCase() ? 65 : 97;
      let k = key[j % key.length].charCodeAt(0) - 97;

      res += String.fromCharCode((c.charCodeAt(0) - base + k) % 26 + base);
      j++;
    } else res += c;
  }

  return res;
}

function vigenereDecrypt(text, key) {
  key = key.toLowerCase();
  let res = "";
  let j = 0;

  for (let i = 0; i < text.length; i++) {
    let c = text[i];

    if (/[a-z]/i.test(c)) {
      let base = c === c.toUpperCase() ? 65 : 97;
      let k = key[j % key.length].charCodeAt(0) - 97;

      res += String.fromCharCode((c.charCodeAt(0) - base - k + 26) % 26 + base);
      j++;
    } else res += c;
  }

  return res;
}