const allJokes = [
  "Chuck Norris does infinit loops in 4 seconds."
];

const init = document.querySelector("#init");

init.addEventListener('click', async (e) => {
  const button = e.target;

  if (button.disabled) return;
  button.disabled = true; // prevent new clicks until completing  

  if (!button.dataset.width) {
    const width = button.offsetWidth;
    button.dataset.width = width;
    button.style.width = `${width}px`;
  }

  const oldText = button.textContent;
  button.textContent = "Loading...";

  let newOne;
  let counter = 0;
  let joke;
  do {
    joke = await getNewJoke();
    newOne = !allJokes.includes(joke);
    counter++;
    if (counter > 12) { // limit too much requests 
      console.error('The are no new jokes.');
      button.textContent = "Jokes are over.";
      return;
    }
  } while (!newOne);

  allJokes.push(joke);
  populateTable(joke);
  button.textContent = oldText;
  button.disabled = false;
});

const getNewJoke = async () => {
  const url = "https://api.chucknorris.io/jokes/random?category=dev";

  try {
    const response = await fetch(url);
    const result = await response.json();
    const value = result.value;
    return value;
  } catch (error) {
    console.error(error);
    return false;
  }
}

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