"use strict";
{
 //<canvas>要素はgetContext()メソッドを持つ。
 //getContext()メソッドは、グラフィックを描画するためのメソッドやプロパティをもつオブジェクトを返す。
// getContext()メソッドに引数"2d"を渡して実行すると、2Dグラフィックを描画するためのメソッドやプロパティをもつオブジェクトを返す。

  const canvas = document.querySelector("#draw");
  const ctx = canvas.getContext("2d");

  
  canvas.width = window.innerWidth;
  //innerWidth: Windowの内部の幅をピクセル単位で返す




}
