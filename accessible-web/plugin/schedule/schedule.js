// Schedule your presentation time per slide

let timeInSeconds = 0;

const parseTime = time => {
  const parsed = parseInt(time);
  if (time.indexOf("sec") >= 0) return parsed;
  return isNaN(parsed) ? 0 : parseInt(time) * 60;
};

[].forEach.call(
  document.getElementsByClassName("schedule"),
  time => (timeInSeconds = timeInSeconds + parseTime(time.innerText))
);

const outputElement = document.getElementById("schedule");
if (outputElement) outputElement.innerText = `Length: ${Math.round(timeInSeconds / 60)} min`;
