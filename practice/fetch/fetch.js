const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url, doThis) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doThis(data);
  }
}
function doStuff(data) {
  results = data;
  const outputElement = document.querySelector("#output");
  const html = `
    <h2 style="padding-left: 22px;">${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="${data.name}" style="margin-top: -32px; height: 96px; width:96px">`;
  outputElement.innerHTML = html;
  // console.log("first: ", results);
}

function doStuffList(data) {
  // console.log(data);
  const pokeListElement = document.querySelector("#outputList");
  pokeListElement.style.display = "inline-block";
  const pokeList = data.results.sort((a, b) => a.name > b.name);
  pokeList.forEach((currentItem) => {
    const li = document.createElement("li");
    li.innerHTML = currentItem.name;
    li.style.cursor = "pointer";
    li.style.paddingBottom = "3px";
    pokeListElement.appendChild(li);

    li.addEventListener("click", () => {
      getPokemon(`${urlList}/${currentItem.name}`, doStuff);
    });
  });
}
getPokemon(url, doStuff);
getPokemon(urlList, doStuffList);