let current = "";

/* DARK MODE */
document.getElementById("toggle").onclick = () => {
  document.body.classList.toggle("light");
};

/* DATA + VISUALS */
const data = {
  caesar: {
    title: "Caesar Cipher",
    desc: "Shift letters by fixed value.",
    steps: ["Pick shift", "Shift letters", "Wrap mod 26"],
    visual: () => "A → D, B → E, C → F",
    fun: "Used by Caesar"
  },

  vigenere: {
    title: "Vigenère Cipher",
    desc: "Keyword-based shifting.",
    steps: ["Repeat key", "Add values", "Mod 26"],
    visual: () => "HELLO + KEY → RIJVS",
    fun: "Unbreakable once"
  },

  playfair: {
    title: "Playfair Cipher",
    desc: "Uses 5x5 matrix.",
    steps: ["Create matrix", "Pair letters", "Apply rules"],
    visual: () => "Matrix: KEYWORD → grid",
    fun: "Used in WW1"
  },

  railfence: {
    title: "Rail Fence",
    desc: "Zigzag pattern cipher.",
    steps: ["Write zigzag", "Read rows"],
    visual: () => "Zigzag: H E L L O",
    fun: "Very simple cipher"
  },

  rsa: {
    title: "RSA",
    desc: "Public key cryptography.",
    steps: ["Choose primes", "Generate keys"],
    visual: () => "Encrypt: c = m^e mod n",
    fun: "Used in HTTPS"
  },

  diffie: {
    title: "Diffie-Hellman",
    desc: "Key exchange method.",
    steps: ["Share base", "Compute keys"],
    visual: () => "Shared secret generated",
    fun: "Secure key exchange"
  }
};

/* OPEN */
function openInfo(type) {
  current = type;

  document.querySelector(".cards").style.display = "none";
  document.querySelector(".hero").style.display = "none";

  document.getElementById("infoPage").classList.remove("hidden");

  let d = data[type];

  document.getElementById("title").innerText = d.title;
  document.getElementById("desc").innerText = d.desc;
  document.getElementById("fun").innerText = d.fun;

  document.getElementById("steps").innerHTML =
    d.steps.map(s => `<li>${s}</li>`).join("");

  document.getElementById("visual").innerText = d.visual();
}

/* BACK */
function goBack() {
  document.querySelector(".cards").style.display = "grid";
  document.querySelector(".hero").style.display = "block";
  document.getElementById("infoPage").classList.add("hidden");
}

/* RUN */
function runEncrypt() {
  let t = text.value;
  let k = key.value;

  if (current === "caesar") output.innerText = caesarEncrypt(t, k);
  if (current === "vigenere") output.innerText = vigenereEncrypt(t, k);
  if (current === "railfence") output.innerText = railEncrypt(t, k);
  if (current === "playfair") output.innerText = playfairEncrypt(t, k);
}

function runDecrypt() {
  let t = text.value;
  let k = key.value;

  if (current === "caesar") output.innerText = caesarDecrypt(t, k);
  if (current === "vigenere") output.innerText = vigenereDecrypt(t, k);
  if (current === "railfence") output.innerText = railDecrypt(t, k);
  if (current === "playfair") output.innerText = playfairDecrypt(t, k);
}