"use strict";
{
  const panels = document.querySelectorAll(".panel");

  function toggleOpen() {
    this.classList.toggle("open"); //1)clickするとflex: 5;になる
  }

  function toggleActive(e) {
    //multiple transitionだからイベントを渡す
    console.log(e.propertyName);
    if (e.propertyName.includes("flex")) {
      this.classList.toggle("open-active");　
    }
  }

  panels.forEach((panel) => panel.addEventListener("click", toggleOpen)); //1)
  panels.forEach((panel) =>
    panel.addEventListener("transitionend", toggleActive) //2) 2の処理がおわったら
  ); //transitionend：CSSのアニメーションが終わった時に発生
}
