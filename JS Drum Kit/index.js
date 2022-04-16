window.addEventListener("keydown", function (e) {
  //eは受け取ったkeyデータを参照するためのもの？？
  const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
  //keyCodeっていうもともとの値があるらしい

  const key = document.getElementById(`.key[data-key ="${e.keyCode}"]`);
  if (!audio) return; //audioが止まる
  audio.currentTime = 0; //playされる前に、現在の再生時間を０に戻す
  audio.play(); //playメソッドで再生a


  // console.log(document.getElementById("note"+notoNo));
  key.classList.add("playing");
  // CSSのplayクラスを追加
  //押されたキーはkeyプロパティから取得
});
