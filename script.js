let current="";

document.getElementById("toggle").onclick = () => {
  document.body.classList.toggle("light");
};

const data = {
  caesar: {
    title: "Caesar Cipher",
    desc: "A substitution cipher where each letter is shifted by a fixed number.",
    steps: [
      "Choose a shift key",
      "Convert letters to positions",
      "Add key to each letter",
      "Wrap around using modulo 26",
      "Convert back to letters"
    ]
  },

  vigenere: {
    title: "Vigenère Cipher",
    desc: "Uses a keyword to apply multiple Caesar shifts.",
    steps: [
      "Write the keyword repeatedly",
      "Match keyword with plaintext",
      "Shift each letter based on keyword",
      "Combine results to get ciphertext"
    ]
  },

  rail: {
    title: "Rail Fence Cipher",
    desc: "Zig-zag writing pattern encryption.",
    steps: [
      "Choose number of rails",
      "Write text in zig-zag",
      "Read row by row",
      "Combine rows to get ciphertext"
    ]
  },

  playfair: {
    title: "Playfair Cipher",
    desc: "Encrypts pairs using a 5x5 matrix.",
    steps: [
      "Create 5x5 matrix using key",
      "Split text into pairs",
      "Apply Playfair rules",
      "Same row → shift right",
      "Same column → shift down",
      "Rectangle → swap columns"
    ]
  }
};

function openLab(type){
  current = type;
  document.getElementById("lab").classList.remove("hidden");

  document.getElementById("labTitle").innerText = data[type].title;
  document.getElementById("desc").innerText = data[type].desc;

  let stepsList = document.getElementById("steps");
  stepsList.innerHTML = "";

  data[type].steps.forEach(step => {
    let li = document.createElement("li");
    li.innerText = step;
    stepsList.appendChild(li);
  });
}

function closeLab(){
  document.getElementById("lab").classList.add("hidden");
}

function run(mode){
  let text = document.getElementById("text").value;
  let key = document.getElementById("key").value;
  let out = "";

  if(current==="caesar")
    out = mode==="enc"?caesarEncrypt(text,+key):caesarDecrypt(text,+key);

  if(current==="vigenere")
    out = mode==="enc"?vigenereEncrypt(text,key):vigenereDecrypt(text,key);

  if(current==="rail")
    out = mode==="enc"?railFenceEncrypt(text,+key):railFenceDecrypt(text,+key);

  if(current==="playfair")
    out = mode==="enc"?playfairEncrypt(text,key):playfairDecrypt(text,key);

  document.getElementById("output").innerText = out;
}