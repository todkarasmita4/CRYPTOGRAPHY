function vigenereEncrypt(text, key) {
  let result = "";
  text = text.toUpperCase();
  key = key.toUpperCase();

  for (let i = 0; i < text.length; i++) {
    let shift = key.charCodeAt(i % key.length) - 65;
    result += String.fromCharCode(
      (text.charCodeAt(i) - 65 + shift) % 26 + 65
    );
  }

  return result;
}