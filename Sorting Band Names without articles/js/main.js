const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}

//💡trim() メソッドは、文字列の両端の空白を削除する
//💡replace() メソッドは、pattern に一致する文字列の一部またはすべてを replacement で置き換えた新しい文字列を返す
//""nothingに文字を置き換える

const sortedBands = bands.sort(function (a, b) {
  //とりあえずa,bの2つを渡してそれぞれ比べていくイメージ
  if (strip(a) > strip(b)) {
    //strip反映された状態で並べ替え
    return 1;
  } else {
    return -1;
  }
});

console.log(sortedBands)

document.querySelector("#bands").innerHTML = sortedBands
  .map((band) => `<li>${band}</li>`)
  .join("");

//💡map(): 与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成する
//💡join(): 配列 (または配列風オブジェクト) の全要素を順に連結した文字列を新たに作成して返す(今回はliリストでできた'を消すために''を代わりに入れて消してる)
