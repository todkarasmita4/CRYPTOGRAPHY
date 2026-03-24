const cipherData = {
  caesar: ["Caesar Cipher","Shift letters","C=(P+K)mod26","Basic encryption"],
  vigenere: ["Vigenere Cipher","Repeat key","Ci=(Pi+Ki)mod26","Secure text"],
  rail: ["Rail Fence","Zigzag","Rearrangement","Obfuscation"],
  playfair: ["Playfair","5x5 matrix","Pair rules","Military"],
  rsa: ["RSA","Mod exponentiation","C=M^e mod n","Secure web"],
  diffie: ["Diffie-Hellman","Key exchange","g^(ab) mod p","Networking"]
};

/* Populate dropdown */
window.onload = () => {
  let select = document.getElementById("cipherSelect");
  for (let key in cipherData) {
    let opt = document.createElement("option");
    opt.value = key;
    opt.textContent = cipherData[key][0];
    select.appendChild(opt);
  }
};

/* DARK MODE */
function toggleMode() {
  document.body.classList.toggle("light");
}

/* NAVIGATION */
function openInfo(type) {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("infoPage").classList.remove("hidden");

  let d = cipherData[type];

  document.getElementById("infoTitle").innerText = d[0];
  document.getElementById("description").innerText = d[1];
  document.getElementById("steps").innerText = d[1];
  document.getElementById("formula").innerText = d[2];
  document.getElementById("applications").innerText = d[3];
}

function goHome() {
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("infoPage").classList.add("hidden");
}

/* SIMULATION */
function runCipher() {
  let type = document.getElementById("cipherSelect").value;
  let mode = document.getElementById("mode").value;
  let text = document.getElementById("inputText").value;
  let key = document.getElementById("inputKey").value;

  let result = "";

  try {
    if(type==="caesar") result = mode==="enc"?caesarEncrypt(text,+key):caesarDecrypt(text,+key);
    if(type==="vigenere") result = mode==="enc"?vigenereEncrypt(text,key):vigenereDecrypt(text,key);
    if(type==="rail") result = mode==="enc"?railFenceEncrypt(text,+key):railFenceDecrypt(text,+key);
    if(type==="playfair") result = mode==="enc"?playfairEncrypt(text,key):playfairDecrypt(text,key);
    if(type==="rsa"){
      let [m,p,q,e]=key.split(",").map(Number);
      result = rsaEncrypt(m,p,q,e);
    }
    if(type==="diffie"){
      let [p,g,a,b]=key.split(",").map(Number);
      result = diffieHellman(p,g,a,b);
    }

    document.getElementById("output").innerText = result;
    document.getElementById("status").innerText = "✔ Done";

  } catch {
    document.getElementById("status").innerText = "⚠ Check input";
  }
}