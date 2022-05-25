const divs = document.querySelectorAll("div");
const button = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation();
  //💡stopPropagation()は Event インターフェイスのメソッドで、現在のイベントのキャプチャリングまたはバブリングの過程におけるこれ以上の伝播を抑止します
}

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    capture: false, //we will run the function rather than on the way up
    once: true
  })
);


//once:trueはunbind itself、以下と同じ意味, （３つ目の）引数として使うよ
//💡addEventListenerとして、once 
//listener の呼び出しを一回のみのとしたいかどうかを値で指定します。 true を指定すると、 listener は一度実行された時に自動的に削除されます。


//div.removeEventListener("click", logText, capture?: boolean);



button.addEventListener('click', () => {
  console.log("click!!!");
}, {
  once:true　　//１度クリックしたらもうクリックされない仕組みに
})

