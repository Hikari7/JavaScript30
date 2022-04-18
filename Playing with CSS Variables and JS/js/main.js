"use strict";
{
  const inputs = document.querySelectorAll(".controls input");
  //document にある全ての要素を取得したい場合は、allを使う

  function handleUpdate() {
    const suffix = this.dataset.sizing || "" ;
    //dataset is an object that will contain all the data attributes from that specific element.要素のサイズとか全部を取得できる感じ
    //||(または)->一番最後のときにundefinedになってしまうから

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

    //document.documentElement -> :rootのプロパティをいじる
    //.style ->  色等をいじる
    //.setProperty -> プロパティをセットする　-> ()内の値を設定する
    //()内　-> (this.name)で、各nameの値の値に対して、, valueを与えてね
    //suffix -> sizingの値を足す
  }

  inputs.forEach(input => input.addEventListener("change", handleUpdate));
  inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
}
