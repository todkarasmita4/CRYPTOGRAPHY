function runCipher() {
  let type = document.getElementById("cipherSelect").value;
  let mode = document.getElementById("mode").value;
  let text = document.getElementById("inputText").value;
  let key = document.getElementById("inputKey").value;
  let result = "";

  try {

    if (type === "caesar") {
      result = mode === "enc"
        ? caesarEncrypt(text, +key)
        : caesarDecrypt(text, +key);
    }

    if (type === "vigenere") {
      result = mode === "enc"
        ? vigenereEncrypt(text, key)
        : vigenereDecrypt(text, key);
    }

    if (type === "rail") {
      result = mode === "enc"
        ? railFenceEncrypt(text, +key)
        : railFenceDecrypt(text, +key);
    }

    if (type === "playfair") {
      result = mode === "enc"
        ? playfairEncrypt(text, key)
        : playfairDecrypt(text, key);
    }

    if (type === "rsa") {
      let [m,p,q,e] = key.split(",").map(Number);
      result = rsaEncrypt(m,p,q,e);
    }

    if (type === "diffie") {
      let [p,g,a,b] = key.split(",").map(Number);
      result = diffieHellman(p,g,a,b);
    }

    document.getElementById("output").innerText = result;
    document.getElementById("status").innerText = "✨ Success";

  } catch {
    document.getElementById("status").innerText = "⚠️ Check inputs";
  }
}

/* INFO CONTENT */
function showInfo() {
  let type = document.getElementById("cipherSelect").value;

  if(type==="caesar"){
    setInfo("Shift cipher","Shift letters by key","C=(P+K)mod26","Basic encryption");
  }
  if(type==="vigenere"){
    setInfo("Keyword cipher","Repeat key","Ci=(Pi+Ki)mod26","Secure text");
  }
  if(type==="rail"){
    setInfo("Zig-zag cipher","Write in rails","Pattern based","Obfuscation");
  }
  if(type==="playfair"){
    setInfo("Pair cipher","5x5 matrix","Digraph rules","Military use");
  }
  if(type==="rsa"){
    setInfo("Asymmetric","Mod exponentiation","C=M^e mod n","Secure web");
  }
  if(type==="diffie"){
    setInfo("Key exchange","Shared secret","g^(ab) mod p","Network security");
  }
}

function setInfo(d,s,f,a){
  document.getElementById("description").innerText=d;
  document.getElementById("steps").innerText=s;
  document.getElementById("formula").innerText=f;
  document.getElementById("applications").innerText=a;
}

window.onload = showInfo;