function caesarEncrypt(text, key) {
  return text.toUpperCase().split('').map(c => {
    if (c.match(/[A-Z]/)) {
      return String.fromCharCode((c.charCodeAt(0) - 65 + key) % 26 + 65);
    }
    return c;
  }).join('');
}