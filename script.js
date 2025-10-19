function updateClock() {
  const today = new Date();

  const millisec = today.getTime();

  document.getElementById(
    'time'
  ).textContent = `Current Time (milliseconds):${millisec} `;
}

setInterval(updateClock, 1000);

updateClock();
