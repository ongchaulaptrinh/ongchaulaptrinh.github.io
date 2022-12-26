const d = document.getElementById("d");
const h = document.getElementById("h");
const m = document.getElementById("m");
const s = document.getElementById("s");

function getTrueNumber(num) {
  return num < 10 ? "0" + num : num;
}

function calculateRemainingTime() {
  const comingYear = new Date().getFullYear() + 1;
  const comingDate = new Date(`Jan 1, ${comingYear} 00:00:00`);

  const now = new Date();
  const remainingTime = comingDate.getTime() - now.getTime();
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((remainingTime % (1000 * 60)) / 1000);

  d.innerHTML = getTrueNumber(days);
  h.innerHTML = getTrueNumber(hours);
  m.innerHTML = getTrueNumber(mins);
  s.innerHTML = getTrueNumber(secs);

  return remainingTime;
}

function initCountdown() {
  const interval = setInterval(() => {
    const remainingTimeInMs = calculateRemainingTime();

    if (remainingTimeInMs <= 1000) {
      clearInterval(interval);
      initCountdown();
    }
  }, 1000);
}

initCountdown();
