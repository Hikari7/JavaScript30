"use strict";
{
  //<canvas>要素はgetContext()メソッドを持つ。
  //getContext()メソッドは、グラフィックを描画するためのメソッドやプロパティをもつオブジェクトを返す。
  // getContext()メソッドに引数"2d"を渡して実行すると、2Dグラフィックを描画するためのメソッドやプロパティをもつオブジェクトを返す。

  //💡 isDrawing = true; /false;は割と書くことが多いらしい💡

  const canvas = document.querySelector("#draw");
  const ctx = canvas.getContext("2d"); //where we do all of our drawings for our canvas

  canvas.width = window.innerWidth;
  //innerWidth: Windowの内部の幅をピクセル単位で返す
  canvas.height = window.innerHeight;

  ctx.strokeStyle = "#BADA55";
  //輪郭形状に使う現在の色やスタイル を指定したり，現在の輪郭形状に使う色やスタイルを把握させる
  ctx.lineJoin = "round";
  // 線の接合箇所の形状をround(丸く)する
  ctx.lineCap = "round";
  //線端の形状をround(丸く)指定する
  ctx.lineWidth = 100;
  //太さ
  // ctx.globalCompositeOperation = "multiply";
  //💡globalCompositeOperation参照

  let isDrawing = false; //カーソルを離しているかどうか、一旦変数にして宣言しておく
  let lastX = 0; //書き始め、終わりの指定
  let lastY = 0; //書き始め、終わりの指定
  let hue = 0; //色
  let direction = true;

  function draw(e) {
    if (!isDrawing) return; // stop the function from running when thy are not moused down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath(); //start from
    ctx.moveTo(lastX, lastY); //go to
    ctx.lineTo(e.offsetX, e.offsetY); //画面上（document内）に配置したHTML要素の表示位置を座標で取得できる
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY]; //destructuring array: 分割代入：配列から値を取り出して、あるいはオブジェクトからプロパティを取り出して別個の変数に代入

    lastX = e.offsetX;
    lastY = e.offsetY;
    //draw functionが終わった後にlastXとlastYをアップデートしなきゃいけない
    hue++;
    if (hue >= 360) {
      //hueが360以上になったらリセットされる
      hue = 0;
    }

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      //もしlineWidthが100以上もしくは1以下だったら
      direction = !direction; //firectionをひっくり返す
    }
    if (direction) {
      //direction内やったら
      ctx.lineWidth++; //増える
    } else {
      ctx.lineWidth--; //減る
    }
  } //カッコここで囲まないと効かないよ

  canvas.addEventListener("mousedown", (e) => {
    //mousedownしたら、以下の２つのイベントが発生
    isDrawing = true; //書いてるよ
    [lastX, lastY] = [e.offsetX, e.offsetY]; //lastX, Yを更新
  });

  //lastXとlastYをアップデートせないかん

  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", () => (isDrawing = false)); //マウスボタンを離した時
  canvas.addEventListener("mouseout", () => (isDrawing = false)); //画面からはみ出した時
}
