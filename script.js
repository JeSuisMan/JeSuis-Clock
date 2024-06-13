function updateTime() {
  const timeZones = {
    "new-york-time": { timeZone: "America/New_York", locale: "en-US" },
    "london-time": { timeZone: "Europe/London", locale: "en-GB" },
    "san-diego-time": { timeZone: "America/Los_Angeles", locale: "en-US" },
    "sydney-time": { timeZone: "Australia/Sydney", locale: "en-AU" },
    "helsinki-time": { timeZone: "Europe/Helsinki", locale: "en-FI" },
    "new-delhi-time": { timeZone: "Asia/Kolkata", locale: "en-IN" }
  };

  const now = new Date();

  for (const [id, { timeZone, locale }] of Object.entries(timeZones)) {
    const timeString = now.toLocaleString(locale, { timeZone });
    const element = document.getElementById(id);
    if (element) {
      element.textContent = timeString;
    } else {
      console.error(`Element with id ${id} not found`);
    }
  }
}

setInterval(updateTime, 1000);

