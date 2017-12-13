var seconds = 0, minutes = 0, milliseconds = 0, t, distance, time;
var distance_id = ["200", "400", "800", "1600", "3200", "5k"];

var html_id = []
var row = []
for (var j = 0; j < 30; j++) {
  for (var i = 0; i < distance_id.length; i++) {
    row.push(distance_id[i] + "-" + String(j+1));
  }
  html_id.push(row);
  row = [];
}

function add() {
    milliseconds++
    if (milliseconds >= 100){
      milliseconds = 0;
      seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById("timer").innerHTML = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds) + "." + (milliseconds > 9 ? milliseconds : "0" + milliseconds);
    startTimer();
}
/* Start Button */
function startTimer() {
    t = setTimeout(add, 10);

}

/* Stop button */
function stopTimer() {
    clearTimeout(t);
}

/* Clear button */
function resetTimer() {
    document.getElementById("timer").innerHTML = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}

/* Distance Calculations Below */
function distOne(){
  distance = 200;
}

function distTwo(){
  distance = 400;
}

function distThree(){
  distance=800;
}

function distFour(){
  distance = 1600;
}

function distFive(){
  distance = 3200;
}

function distSix(){
  distance = 5000;
}

function postTime(d, tag){
  var pace = distance / time;
  var time_d = Math.floor(d / pace);
  var s = Math.floor(time_d % (1000 * 60) / 1000);
  var m = Math.floor(time_d % (1000 * 60 * 60) / (1000 * 60));
  var ms = Math.floor(time_d % (1000));
  console.log((m ? (m > 9 ? m : "0" + m) : "00") + ":" + (s > 9 ? s : "0" + s) + "." + (ms > 9 ? ms : "0" + ms));
  document.getElementById(tag).innerHTML = (m ? (m > 9 ? m : "0" + m) : "00") + ":" + (s > 9 ? s : "0" + s) + "." + (ms > 9 ? ms : "0" + ms);
}

function split(stud){
  time = milliseconds + (seconds * 1000) + (minutes * 60 * 1000);
  postTime(200, html_id[stud][0]);
  postTime(400, html_id[stud][1]);
  postTime(800, html_id[stud][2]);
  postTime(1600, html_id[stud][3]);
  postTime(3200, html_id[stud][4]);
  postTime(5000, html_id[stud][5]);
}

function clearTable(){
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 6; j++) {
      document.getElementById(html_id[i][j]).innerHTML = "";
    }
  }
}
