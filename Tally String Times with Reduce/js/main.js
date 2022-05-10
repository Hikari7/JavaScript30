//first do ti with map and reduce, and then we'll look at how do you just make it in one single reduce.

"use strict";
{
  const timeNodes = Array.from(document.querySelectorAll("[data-time]"));
  //配列にするためarray.from使う
  //💡Array.from() メソッドは、配列のようなオブジェクトや反復可能オブジェクトから、浅くコピーされた新しい Array インスタンスを生成する

  const seconds = timeNodes
    .map((node) => node.dataset.time)
    //↑turn them from a node list into an array of actual time strings
    //HTMLのdata-属性
    .map((timeCode) => {
      //turn that into just second
      const [mins, secs] = timeCode.split(":").map(parseFloat);
      //↑ break that into minutes and seconds
      return mins * 60 + secs;
      //we could just map over that array real quick and you could pass it(Parse float ->will run the parse float function agains every item in the result array). 💡引数を (必要に応じてまず文字列に変換してから) 解釈し、浮動小数点値を返す
      console.log(mins, secs);
    })
    //↑全文秒単位にされてる↓add up していく
    .reduce((total, vidseconds) => total + vidseconds);

  let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft / 3600); //hourに変換
  secondsLeft = secondsLeft % 3600; //↑で割れなかった分の余りを出す
  const mins = Math.floor(secondsLeft / 60); //minsに変換
  secondsLeft = secondsLeft % 60; //↑で割れなかった分の余りを出す

  //Consoleに叩き出す！
  console.log(hours, mins, secondsLeft);
}
