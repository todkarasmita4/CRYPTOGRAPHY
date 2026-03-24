let current="";

const data={
  caesar:["Caesar Cipher","Shift letters","Used in Roman times"],
  vigenere:["Vigenère Cipher","Keyword shifts","More secure"],
  rail:["Rail Fence","Zig-zag pattern","Transposition"],
  playfair:["Playfair","Pair encryption","Military use"]
};

document.getElementById("toggle").onclick=()=>{
  document.body.classList.toggle("light");
};

function openLab(type){
  current=type;
  document.getElementById("lab").classList.remove("hidden");

  document.getElementById("labTitle").innerText=data[type][0];
  document.getElementById("desc").innerText=data[type][1];
  document.getElementById("extra").innerText=data[type][2];
}

function closeLab(){
  document.getElementById("lab").classList.add("hidden");
}

function run(mode){
  let text=document.getElementById("text").value;
  let key=document.getElementById("key").value;
  let out="";

  if(current==="caesar") out=mode==="enc"?caesarEncrypt(text,+key):caesarDecrypt(text,+key);
  if(current==="vigenere") out=mode==="enc"?vigenereEncrypt(text,key):vigenereDecrypt(text,key);
  if(current==="rail") out=mode==="enc"?railFenceEncrypt(text,+key):railFenceDecrypt(text,+key);
  if(current==="playfair") out=mode==="enc"?playfairEncrypt(text,key):playfairDecrypt(text,key);

  document.getElementById("output").innerText=out;
}