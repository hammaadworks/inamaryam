// --- Countdown Timer Logic (Keep your existing countdown if you have one) ---
// If you have countdown logic here, ensure it's placed before the audio control.
// Example placeholder for countdown (replace with your actual code)
function updateCountdown() {
  const nikahDate = new Date("June 19, 2025 19:00:00 GMT+0530").getTime(); // Adjust time if needed
  const now = new Date().getTime();
  const distance = nikahDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update elements (ensure your HTML has these IDs)
  if (document.getElementById("days")) document.getElementById("days").innerHTML = String(days).padStart(2, '0');
  if (document.getElementById("hours")) document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
  if (document.getElementById("minutes")) document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
  if (document.getElementById("seconds")) document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

  if (distance < 0) {
    clearInterval(countdownInterval);
    if (document.getElementById("countdown")) document.getElementById("countdown").innerHTML = "Event Done!";
  }
}

// Ensure the countdown starts
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Call once immediately to avoid 1-second delay at start

// --- Sakura Falling Effect (Keep your existing jQuery Sakura) ---
$(document).ready(function() {
    $('.sakura-falling').sakura();
});

// --- Audio Control Logic ---
document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById("my_audio");
  const audioControl = document.getElementById("audio_control");
  const speakerIcon = document.getElementById("speaker_icon");

  // Attempt to play audio immediately
  // Browsers often block autoplay without user interaction, so we handle the promise
  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise.then(() => {
      // Autoplay succeeded
      console.log("Audio started playing automatically.");
      speakerIcon.className = "fa fa-volume-up"; // Set to unmuted icon
    }).catch(error => {
      // Autoplay was prevented
      console.log("Autoplay prevented. User interaction required:", error);
      audio.muted = true; // Ensure it's muted if autoplay fails
      speakerIcon.className = "fa fa-volume-off"; // Set to muted icon
    });
  } else {
    // Fallback for very old browsers that don't return a promise
    console.log("Audio play initiated (no promise returned).");
    speakerIcon.className = "fa fa-volume-up"; // Assume unmuted
  }

  // Mute/Unmute functionality on click
  audioControl.addEventListener('click', function() {
    if (audio.muted) {
      audio.muted = false;
      audio.play(); // Play if it was paused while muted
      speakerIcon.className = "fa fa-volume-up"; // Change to unmuted icon
      console.log("Audio unmuted.");
    } else {
      audio.muted = true;
      speakerIcon.className = "fa fa-volume-off"; // Change to muted icon
      console.log("Audio muted.");
    }
  });

  // Optional: Add a slight animation to the audio control on hover
  audioControl.onmouseover = function() { this.style.transform = "scale(1.1)"; this.style.transition = "transform 0.2s"; };
  audioControl.onmouseout = function() { this.style.transform = "scale(1)"; };
});