(function ($) {
  "use strict";
  $(".sakura-falling").sakura();
})(jQuery);

$(document).on("click", function () {
  document.getElementById("my_audio").play();
  console.log("Audio started playing");
});

const countDownDate = new Date("Jun 19, 2025 18:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = `
    <div class="after-message">
      <h2 class="headline">✨ It’s Time! ✨</h2>
      <p class="subtext">Make heartfelt duas for the beautiful couple <strong>Saba Maryam</strong> and <strong>Mohammed Inam Ul Hassan</strong>.</p>
      <p class="barakah">May Allah bless this union with barakah, love, and endless joy — Ameen ❤️</p>
    </div>
  `;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);
}, 1000);

function pad(num) {
  return num < 10 ? "0" + num : num;
}
