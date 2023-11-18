document
  .getElementById("surpriseButton")
  .addEventListener("click", function () {
    const surprises = [
      "You’re my sunshine on a cloudy day.",
      "Every moment with you is a treasure.",
      "Loving you is the best decision I ever made.",
      "I know I hurt u a lot unintentionally but I love you a lot!",
    ];
    const randomSurprise =
      surprises[Math.floor(Math.random() * surprises.length)];
    document.getElementById("surprise").innerText = randomSurprise;
  });
