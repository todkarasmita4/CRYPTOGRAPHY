function caesarEncrypt(text, shift) {
  shift = parseInt(shift) % 26;

  return text.split("").map(c => {
    if (/[a-z]/i.test(c)) {
      let base = c === c.toUpperCase() ? 65 : 97;
      return String.fromCharCode((c.charCodeAt(0) - base + shift + 26) % 26 + base);
    }
    return c;
  }).join("");
}

function caesarDecrypt(text, shift) {
  return caesarEncrypt(text, -shift);
}