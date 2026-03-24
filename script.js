let score = 0;
let streak = 0;
let correctAnswer = "";
let currentHint = "";

function newQuestion() {
  let type = Math.floor(Math.random() * 6);

  if (type === 0) {
    let word = "HELLO";
    document.getElementById("question").innerText =
      "Caesar (key=3): " + word;
    correctAnswer = caesarEncrypt(word, 3);
    currentHint = "Shift letters by 3";
  }

  if (type === 1) {
    let word = "WORLD";
    document.getElementById("question").innerText =
      "Vigenere (key=KEY): " + word;
    correctAnswer = vigenereEncrypt(word, "KEY");
    currentHint = "Use repeating key";
  }

  if (type === 2) {
    let word = "CRYPTO";
    document.getElementById("question").innerText =
      "Rail Fence (2 rails): " + word;
    correctAnswer = railFenceEncrypt(word, 2);
    currentHint = "Zig-zag pattern";
  }

  if (type === 3) {
    let word = "SECURITY";
    document.getElementById("question").innerText =
      "Playfair (key=KEY): " + word;
    correctAnswer = playfairEncrypt(word, "KEY");
    currentHint = "5x5 matrix";
  }

  if (type === 4) {
    document.getElementById("question").innerText =
      "RSA: M=5, p=3, q=11, e=3";
    correctAnswer = rsaEncrypt(5, 3, 11, 3).toString();
    currentHint = "M^e mod n";
  }

  if (type === 5) {
    document.getElementById("question").innerText =
      "Diffie-Hellman: p=23,g=5,a=6,b=15";
    correctAnswer = diffieHellman(23, 5, 6, 15).toString();
    currentHint = "Shared key formula";
  }

  document.getElementById("hint").innerText = "💡 Hint: ???";
}

function showHint() {
  document.getElementById("hint").innerText = "💡 Hint: " + currentHint;
  score = Math.max(0, score - 5);
  document.getElementById("score").innerText = score;
}

function skipQuestion() {
  streak = 0;
  document.getElementById("streak").innerText = streak;
  newQuestion();
}

function checkAnswer() {
  let user = document.getElementById("answer").value.toUpperCase();

  if (user === correctAnswer.toUpperCase()) {
    score += 10;
    streak++;
    document.getElementById("feedback").innerText = "✅ Correct!";
  } else {
    streak = 0;
    document.getElementById("feedback").innerText =
      "❌ Wrong! Correct: " + correctAnswer;
  }

  document.getElementById("score").innerText = score;
  document.getElementById("streak").innerText = streak;

  document.getElementById("answer").value = "";
  newQuestion();
}

/* ========================= */
/* SIMULATION FUNCTION */
/* ========================= */

function runSimulation() {
  let type = document.getElementById("simCipher").value;
  let text = document.getElementById("simText").value;
  let key = document.getElementById("simKey").value;
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

  document.getElementById("simResult").innerText = result;
}

window.onload = newQuestion;