function runCipher() {
  let type = document.getElementById("cipherSelect").value;
  let text = document.getElementById("inputText").value;
  let key = document.getElementById("inputKey").value;
  let result = "";

  if (type === "caesar") {
    result = caesarEncrypt(text, parseInt(key));
  }

  if (type === "vigenere") {
    result = vigenereEncrypt(text, key);
  }

  if (type === "rail") {
    result = railFenceEncrypt(text, parseInt(key));
  }

  if (type === "playfair") {
    result = playfairEncrypt(text, key);
  }

  if (type === "rsa") {
    let [m, p, q, e] = key.split(",").map(Number);
    result = rsaEncrypt(m, p, q, e);
  }

  if (type === "diffie") {
    let [p, g, a, b] = key.split(",").map(Number);
    result = diffieHellman(p, g, a, b);
  }

  document.getElementById("output").innerText = result;
}

/* INFO SECTION */

function showInfo() {
  let type = document.getElementById("cipherSelect").value;

  if (type === "caesar") {
    setInfo(
      "Simple substitution cipher shifting letters.",
      "Shift each letter by key value",
      "C = (P + K) mod 26",
      "Basic encryption, teaching"
    );
  }

  if (type === "vigenere") {
    setInfo(
      "Polyalphabetic cipher using a keyword.",
      "Repeat key and shift letters",
      "Ci = (Pi + Ki) mod 26",
      "Secure text encryption"
    );
  }

  if (type === "rail") {
    setInfo(
      "Transposition cipher in zig-zag pattern.",
      "Write in rails and read row-wise",
      "Pattern-based rearrangement",
      "Message obfuscation"
    );
  }

  if (type === "playfair") {
    setInfo(
      "Digraph substitution cipher.",
      "Use 5x5 matrix and encrypt pairs",
      "Pair transformation rules",
      "Military encryption"
    );
  }

  if (type === "rsa") {
    setInfo(
      "Asymmetric encryption algorithm.",
      "Generate keys and apply modular exponentiation",
      "C = M^e mod n",
      "Secure communication"
    );
  }

  if (type === "diffie") {
    setInfo(
      "Key exchange method.",
      "Generate shared secret key",
      "K = g^(ab) mod p",
      "Secure key exchange"
    );
  }
}

function setInfo(desc, steps, formula, app) {
  document.getElementById("description").innerText = desc;
  document.getElementById("steps").innerText = steps;
  document.getElementById("formula").innerText = formula;
  document.getElementById("applications").innerText = app;
}

window.onload = showInfo;