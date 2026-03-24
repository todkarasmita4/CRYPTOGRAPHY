let current = "";

const names = {
  caesar: "Caesar Cipher",
  vigenere: "Vigenère Cipher",
  rail: "Rail Fence Cipher",
  playfair: "Playfair Cipher",
  rsa: "RSA",
  diffie: "Diffie-Hellman"
};

/* OPEN LAB */
function openLab(type){
  current = type;
  document.getElementById("lab").classList.remove("hidden");
  document.getElementById("labTitle").innerText = names[type];
}

/* CLOSE */
function closeLab(){
  document.getElementById("lab").classList.add("hidden");
}

/* RUN */
function run(mode){
  let text = document.getElementById("text").value;
  let key = document.getElementById("key").value;
  let out = "";

  if(current==="caesar") out = mode==="enc"?caesarEncrypt(text,+key):caesarDecrypt(text,+key);
  if(current==="vigenere") out = mode==="enc"?vigenereEncrypt(text,key):vigenereDecrypt(text,key);
  if(current==="rail") out = mode==="enc"?railFenceEncrypt(text,+key):railFenceDecrypt(text,+key);
  if(current==="playfair") out = mode==="enc"?playfairEncrypt(text,key):playfairDecrypt(text,key);

  document.getElementById("output").innerText = out;
}