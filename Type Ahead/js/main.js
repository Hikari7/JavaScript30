"use strict";
{
  //😭この回はもう訳分かんなかったからまたやり直しするよ！！！！😭
  //ajax = 検索エンジンとか地図アプリで使われているよ！

  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  const cities = [];
  fetch(endpoint)
    .then((blob) => blob.json())
    .then((data) => cities.push(...data));
  //fetch()：非同期通信という方法で、サーバ上にある欲しいデータを取得できるメソッド
  //スプレッド構文：配列の中で使うことで、そこに別の配列を展開する

  function findMatches(wordToMatch, cities) {
    return cities.filter((place) => {
      // here we need to figure out if the city or state matches what was searched
      const regex = new RegExp(wordToMatch, "gi");
      return place.city.match(regex) || place.state.match(regex);
    });
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray
      .map((place) => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        const stateName = place.state.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
      })
      .join("");
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector(".search");
  const suggestions = document.querySelector(".suggestions");

  searchInput.addEventListener("change", displayMatches);
  searchInput.addEventListener("keyup", displayMatches);
  //keyupイベント：テキストボックス上でキーを押し上げるとkeycodeをコンソールに表示する
}
