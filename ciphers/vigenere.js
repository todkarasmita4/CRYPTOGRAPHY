function vigenereEncrypt(text, key) {
  text = text.toUpperCase();
  key = key.toUpperCase();
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let t = text.charCodeAt(i) - 65;
    let k = key.charCodeAt(i % key.length) - 65;
    result += String.fromCharCode((t + k) % 26 + 65);
  }

  return result;
}