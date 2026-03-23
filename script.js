let score = 0;
let correctAnswer = "";

function newQuestion() {
  let type = Math.floor(Math.random() * 6);

  if (type === 0) {
    let word = "HELLO";
    document.getElementById("question").innerText =
      "Caesar (key=3): " + word;
    correctAnswer = caesarEncrypt(word, 3);
  }

  if (type === 1) {
    let word = "WORLD";
    document.getElementById("question").innerText =
      "Vigenere (key=KEY): " + word;
    correctAnswer = vigenereEncrypt(word, "KEY");
  }

  if (type === 2) {
    let word = "CRYPTO";
    document.getElementById("question").innerText =
      "Rail Fence (2 rails): " + word;
    correctAnswer = railFenceEncrypt(word, 2);
  }

  if (type === 3) {
    let word = "SECURITY";
    document.getElementById("question").innerText =
      "Playfair (key=KEY): " + word;
    correctAnswer = playfairEncrypt(word, "KEY");
  }

  if (type === 4) {
    document.getElementById("question").innerText =
      "RSA encrypt M=5 (p=3,q=11,e=3)";
    correctAnswer = rsaEncrypt(5, 3, 11, 3).toString();
  }

  if (type === 5) {
    document.getElementById("question").innerText =
      "Diffie-Hellman shared key (p=23,g=5,a=6,b=15)";
    correctAnswer = diffieHellman(23, 5, 6, 15).toString();
  }
}

function checkAnswer() {
  let user = document.getElementById("answer").value.toUpperCase();

  if (user === correctAnswer.toUpperCase()) {
    score += 10;
    document.getElementById("feedback").innerText = "✅ Correct!";
  } else {
    document.getElementById("feedback").innerText =
      "❌ Wrong! Correct: " + correctAnswer;
  }

  document.getElementById("score").innerText = score;
  document.getElementById("answer").value = "";

  newQuestion();
}

window.onload = newQuestion;