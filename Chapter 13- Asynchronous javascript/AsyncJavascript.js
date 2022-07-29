//Timers
let updateIntervalId = setInterval(checkForUpdates, 6000);

function stopCheckingForUpdates() {
  clearInterval(updateIntervalId);
}

let okay = document.querySelector("#confirmUpdateDialog");
okay.addEventListener("click", applyUpdate);
