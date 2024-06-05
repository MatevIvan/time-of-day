let date = new Date();
let hour = date.getHours();
let greeting = "";
let color = "";
let pic = "";

if (hour >= 5 && hour < 12) {
  // Morning
  greeting = "Good Morning!";
  color = "#f6fccb";
  pic = "Morning.png";
} else if (hour >= 12 && hour < 18) {
  //Afternoon
  greeting = "Good Afternoon!";
  color = "#5dbbfa";
  pic = "Noon.png";
} else if (hour >= 18 && hour < 23) {
  //Evening
  greeting = "Good Evening!";
  color = "#ef777c";
  pic = "Evening.png";
} else {
  //Night
  greeting = "Good Night!";
  color = "#50499f";
  pic = "Night.png";
}

document.getElementById("my-greeting").innerHTML = greeting;
document.querySelector("html").style.backgroundColor = color;
document.getElementById("my-pic").src = "images/" + pic;
document.getElementById("current-time").textContent =
  "Current Time: " + hour + ":" + date.getMinutes();
