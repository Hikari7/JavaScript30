"use strict";

{
  const pressed = [];
  const secretCode = "wesbos";

  window.addEventListener("keyup", (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    //💡splice(変化が開始する位置, 削除数)
    //secretCodeの文字数, 余分な文字数

    if (pressed.join("").includes(secretCode)) {
      console.log("DING DING!");
      cornify_add();
    }
    
    //💡join(): 配列の要素を文字列として結合するための命令
    //💡includes() メソッドは、特定の要素が配列に含まれているかどうかを true または false で返す



    console.log(pressed);
  });
}
