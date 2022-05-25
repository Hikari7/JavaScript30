const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => {
    if (this.classList.contains("trigger-enter")) {
      this.classList.add("trigger-enter-active");                                 //ラグをなくすように
    }
  }, 150);
  background.classList.add("open");

  const dropdown = this.querySelector(".dropdown"); //それぞれのdropdownの要素を取得
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect(); //実際にdropdownが表示される場所(nav)を取得(x, y座標になる)

  console.log(navCoords);

  //💡Element.getBoundingClientRect() メソッドは、要素の寸法と、そのビューポートに対する相対位置に関する情報を返します。

  const coords = {
    //dropdownCoordsとnavCordsを合わせる
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    //変更が加えられたときも固定されれるように、 navDoords.top分を引いてoffsetする
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);

  //💡CSSStyleDeclaration.setProperty() メソッドインターフェイスは、 CSS スタイル宣言オブジェクトのプロパティに新しい値を設定します。
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
