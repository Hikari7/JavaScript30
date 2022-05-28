const slider = document.querySelector(".items");
let isDown = false;
let startX; // we need to know ehre that initial click down was
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  console.log(e.pageX);
  scrollLeft = slider.scrollLeft; //we always need to go back to that initial state when it started, when you did that first click down.
  startX = e.pageX - slider.offsetLeft;
  //💡offsetLeft: 現在の要素の左上隅が HTMLElement.offsetParent ノード内で左へオフセットされるピクセル数を返す
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return; //stop the fn from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  // console.log({x, startX});
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
