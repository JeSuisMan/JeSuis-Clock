function updateTime() {
  const newYorkTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  const londonTime = new Date().toLocaleString("en-GB", {timeZone: "Europe/London"});
  const tokyoTime = new Date().toLocaleString("en-JP", {timeZone: "Asia/Tokyo"});
  const sydneyTime = new Date().toLocaleString("en-AU", {timeZone: "Australia/Sydney"});
  const helsinkiTime = new Date().toLocaleString("en-FI", {timeZone: "Europe/Helsinki"});
  const newDelhiTime = new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata"});

  document.getElementById("new-york-time").textContent = newYorkTime;
  document.getElementById("london-time").textContent = londonTime;
  document.getElementById("tokyo-time").textContent = tokyoTime;
  document.getElementById("sydney-time").textContent = sydneyTime;
  document.getElementById("helsinki-time").textContent = helsinkiTime;
  document.getElementById("new-delhi-time").textContent = newDelhiTime;
}


setInterval(updateTime, 1000);
