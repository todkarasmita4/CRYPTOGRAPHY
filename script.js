const data = {
  caesar: ["Caesar Cipher","Shifts letters","C=(P+K) mod 26","Used in ancient Rome"],
  vigenere: ["Vigenere Cipher","Keyword-based shift","Ci=(Pi+Ki) mod 26","Stronger than Caesar"],
  rail: ["Rail Fence","Zig-zag writing","Rearrangement","Used in puzzles"],
  playfair: ["Playfair","Pair encryption","Matrix 5x5","Military encryption"],
  rsa: ["RSA","Public key crypto","C=M^e mod n","Secure web"],
  diffie: ["Diffie-Hellman","Key exchange","g^(ab) mod p","Secure communication"]
};

/* Dropdown */
window.onload = () => {
  let sel = document.getElementById("cipher");
  for (let k in data) {
    let o = document.createElement("option");
    o.value = k;
    o.textContent = data[k][0];
    sel.appendChild(o);
  }
};

/* THEME */
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};

/* PANEL */
function openPanel(type){
  let p = document.getElementById("panel");
  p.classList.remove("hidden");

  document.getElementById("pTitle").innerText = data[type][0];
  document.getElementById("pDesc").innerText = data[type][1];
  document.getElementById("pSteps").innerText = data[type][1];
  document.getElementById("pFormula").innerText = data[type][2];
  document.getElementById("pApp").innerText = data[type][3];
}

function closePanel(){
  document.getElementById("panel").classList.add("hidden");
}

/* SIMULATOR */
function run(mode){
  let type = document.getElementById("cipher").value;
  let text = document.getElementById("text").value;
  let key = document.getElementById("key").value;

  let out="";

  if(type==="caesar") out = mode==="enc"?caesarEncrypt(text,+key):caesarDecrypt(text,+key);
  if(type==="vigenere") out = mode==="enc"?vigenereEncrypt(text,key):vigenereDecrypt(text,key);
  if(type==="rail") out = mode==="enc"?railFenceEncrypt(text,+key):railFenceDecrypt(text,+key);
  if(type==="playfair") out = mode==="enc"?playfairEncrypt(text,key):playfairDecrypt(text,key);
  if(type==="rsa"){ let [m,p,q,e]=key.split(",").map(Number); out=rsaEncrypt(m,p,q,e);}
  if(type==="diffie"){ let [p,g,a,b]=key.split(",").map(Number); out=diffieHellman(p,g,a,b);}

  document.getElementById("output").innerText = out;
}