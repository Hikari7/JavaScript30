"use strict";
{
  const hero = document.querySelector(".hero");
  const text = hero.querySelector("h1");
  const walk = 300; //100px

  function shadow(e) {
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    //↑ const {offsetWidth: width, offsetHeight: height } = hero;　も可能
    let { offsetX: x, offsetY: y } = e;
    //↑カーソルされている場所を取得、それぞれのoffsetを変数x, yに置き換えてる
    // e.offset x, e.offset y

    if (this !== e.target) {
      //e.tharget: the thing that it actually triggered on
      // this: the thing that you listened on
      //h1とheroを差別化
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }
    //↑if there are children elements inside of the hero it's goint to give us the x and the y of the actual element that we hoverd

    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);
    //↑ピクセルをいい感じにストレッチさえせるために調整
    //100の場合、最大50, 最小-50になる

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;

    // console.log(xWalk, yWalk);
  }

  hero.addEventListener("mouseover", shadow);
}
