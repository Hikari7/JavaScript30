//🌸 Get our elements
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]"); //data-skip属性が入ってるもの全部
const ranges = player.querySelectorAll(".player__slider");

//🌸Build out functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
    //↓の書き方でもアリ
    //function toggleplay() {
    //   const method = video.apused ? 'play' : 'pause';
    //   video[method]();
    // }
  }
}

//↓ボタンで再生・停止ができるようにする
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  //条件式 ? 式1 : 式2 = 式1: true, 式2: falseを返す
  toggle.textContent = icon;
}

//↓skipボタンができるようにする
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
  //💡parseFloat: 小数点を返す
  //💡+=: datasetに、さらにcurrentTime(今のビデオ時間)を足す
}

//↓(value属性から)音量、速度の調整
function handleRangeUpdate() {
  video[this.name] = this.value;
  //💡Function オブジェクトの name プロパティは読み取り専用で、作成時に付けられた関数の名前、もしくは無名関数の場合は anonymous または '' (空文字列) を返す
}

//↓ビデオの再生バー
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  //👆How long is the video & How far are we right now?
  progressBar.style.flexBasis = `${percent}%`;
  //flexBasis
}

//🌸 Hook up the event listener
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton); //2) play, updateButton functionも実行される
video.addEventListener("pause", updateButton); //3)
//👆クリックしたら、2)と3)が発動する

//video bar (常に更新する必要がある)
video.addEventListener("timeupdate", handleProgress);
//💡currentTime 属性で示される時刻が更新されたときに発生する

//play
toggle.addEventListener("click", togglePlay);

//skip
skipButtons.forEach((button) => button.addEventListener("click", skip));

//range
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
//💡change イベントはフォーム( input 要素)や選択メニュー( select 要素 )、テキストエリア( textarea 要素)にてユーザーの操作によって値が変更されたときに発生する
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);
