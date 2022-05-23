const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

function fixNav() {
  // console.log(topOfNav, window.scrollY);  topからの距離を取得中
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px"; //navのheightを取得して、データの再読み取りを防止
    document.body.classList.add("fixed-nav");

    document.body.style.paddingTop = nav.offsetHeight;
    //全子要素をターゲットにできる
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);
