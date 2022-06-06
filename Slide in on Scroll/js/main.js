function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    const sliderImages = document.querySelectorAll('.slide-in');

    function checkSlide() {
      sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', debounce(checkSlide));


    ////function which will ran every time the user scrolls
// function checkSlide(e) {
//loop over every single image and figure out where the image need to be then shown
//imgの高さが50%になったら表示させるようにする
// sliderImages.forEach((slideImage) => {
//how far the page being scrolled down -> window.scrollY
// console.log(window.screenY);
//     const slideInAt =
//       window.scrollY + window.innerHeight - slideImage.height / 2;
//   });
// }

// window.addEventListener("scroll", checkSlide);

//the pixel level for where you currently are at the bottom of that.(how far down we are scrilled)f
//→マイナス：画像が半分まで読み込まれた時
//scrollY は、文書が現在垂直方向にスクロールしているピクセル数を返す
//innerHeightは、ウィンドウの内部の高さをピクセル単位で返す

//<from topからじゃなくてfrom bottomからの計算>
// const imageBottom = sliderImages.offsetTop + sliderImages.height;
//offsetの上枠の内側まtTop現在の要素の外枠から、最も近い位置にある祖先要素である offsetParent での距離を相対的に返す

//slideinAtvalue is greater than the top of where the actual image is
// const isHalfShown = slideInAt > sliderImages.offsetTop;

//not scrolled all the way pass the image/ imgをpassしたかどうかチェック
// const isNotScrolledPast = window.scrollY < imageBottom;
// if (isHalfShown && isNotScrolledPast) {
//   sliderImage.classList.add("active");
// } else {
//   sliderImage.classList.remove("active");
// };


