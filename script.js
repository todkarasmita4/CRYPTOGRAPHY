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
    currentHint = "Shift each letter forward by 3";
  }

  if (type === 1) {
    let word = "WORLD";
    document.getElementById("question").innerText =
      "Vigenere (key=KEY): " + word;
    correctAnswer = vigenereEncrypt(word, "KEY");
    currentHint = "Use repeating key shifts";
  }

  if (type === 2) {
    let word = "CRYPTO";
    document.getElementById("question").innerText =
      "Rail Fence (2 rails): " + word;
    correctAnswer = railFenceEncrypt(word, 2);
    currentHint = "Write in zig-zag and read row-wise";
  }

  if (type === 3) {
    let word = "SECURITY";
    document.getElementById("question").innerText =
      "Playfair (key=KEY): " + word;
    correctAnswer = playfairEncrypt(word, "KEY");
    currentHint = "Use 5x5 matrix, I/J combined";
  }

  if (type === 4) {
    document.getElementById("question").innerText =
      "RSA: M=5, p=3, q=11, e=3";
    correctAnswer = rsaEncrypt(5, 3, 11, 3).toString();
    currentHint = "Use C = M^e mod n";
  }

  if (type === 5) {
    document.getElementById("question").innerText =
      "Diffie-Hellman: p=23, g=5, a=6, b=15";
    correctAnswer = diffieHellman(23, 5, 6, 15).toString();
    currentHint = "Compute shared key using powers mod p";
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

window.onload = newQuestion;