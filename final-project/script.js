const init = document.querySelector("#init");

init.addEventListener('click', async (e) => {
  const button = e.target;

  if (!button.dataset.width) {
    const width = button.offsetWidth;
    button.dataset.width = width;
    button.style.width = `${width}px`;
  }

  const oldText = button.textContent;
  button.textContent = "Loading...";

  const url = "https://api.chucknorris.io/jokes/random?category=dev";

  try {
    const response = await fetch(url);
    const result = await response.json();
    const value = result.value;
    console.log(value);

    populateTable(value);
    button.textContent = oldText;
  } catch (error) {
    console.error(error);
  }
});

const populateTable = (joke) => {
  const table = document.querySelector("table");
  const tr = table.lastElementChild;
  const newTr = tr.cloneNode(true);

  const indexEl = newTr.querySelector(".joke-index");
  let index = +indexEl.textContent;
  indexEl.textContent = ++index;

  const textEl = newTr.querySelector(".joke-text");
  textEl.textContent = joke;

  table.appendChild(newTr);
  newTr.scrollIntoView({ behavior: 'smooth', block: 'end' });
}