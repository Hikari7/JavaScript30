// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight"); //highlioghtにCSSのhighlightクラスをつける
document.body.appendChild("highlight");

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${Coords.width}px`;
  highlight.style.height = `${Coords.height}px`;
  highlight.style.transform = `translate(${Coords.left}px, ${Coords.top}px)`;
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));

//💡Element.getBoundingClientRect()：返値は DOMRect オブジェクトで、（パディングと境界の幅を含む）要素全体が収まる最小の長方形です。left, top, right, bottom, x, y, width, height の各プロパティは、長方形の全体の位置と大きさをピクセル数で記述します。
