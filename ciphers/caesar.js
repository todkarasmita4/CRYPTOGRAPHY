function caesarEncrypt(text, shift) {
  let result = "";
  text = text.toUpperCase();

  for (let i = 0; i < text.length; i++) {
    let c = text.charCodeAt(i);

    if (c >= 65 && c <= 90)
      result += String.fromCharCode((c - 65 + shift) % 26 + 65);
    else result += text[i];
  }

  return result;
}