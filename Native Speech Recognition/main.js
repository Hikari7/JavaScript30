window.SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "en-US";

//paragraph作る
let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

//1回目のリスニング
recognition.addEventListener("result", (e) => {
const transcript = Array.from(e.results)
  .map((result) => result[0])
  .map((result) => result.transcript)
  .join("");

// //パラグラフごとに表示
// p.textContent = transcript;
// if (e.results[0].isFinal) {
//   p = document.createElement("p");
//   words.appendChild(p);
// }

// //APIアプリとかで音声機能つけることもできるよ！
// if (transcript.includes("get the weather")) {
//   console.log("getting the weather");
// }
// console.log(transcript);

const poopScript = transcript.replace(/poop|poo|shit|dump/gi, "💩");
p.textContent = poopScript;

if (e.results[0].isFinal) {
  p = document.createElement("p");
  words.appendChild(p);
}
});

recognition.addEventListener("end", recognition.start);

recognition.start();

//2回目のリスニング
recognition.addEventListener("end", recognition.start);
