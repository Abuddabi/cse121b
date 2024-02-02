/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
const filter = document.querySelector("#filtered");
const before1950 = new Date(1950, 0, 1);

/* async displayTemples Function */
const displayTemples = (temples) => {
  const createHTML = (tag) => document.createElement(tag);
  const templeLinkTemplate = "https://www.churchofjesuschrist.org/temples/details/";

  temples.forEach(temple => {
    const article = createHTML("article");
    const h3 = createHTML("h3");
    h3.innerHTML = temple.templeName;

    const img = createHTML("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.location);

    // Stretch
    const a = createHTML("a");
    const templeNameForURL = temple.templeName
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // for Lima Perú
      .replace(/ /g, "-")
      + "-temple";
    a.setAttribute("href", templeLinkTemplate + templeNameForURL);
    a.setAttribute("target", "_blank");

    a.append(h3, img);
    article.appendChild(a);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  templeList = await response.json();

  displayTemples(templeList);
};

/* reset Function */
const reset = () => templesElement.innerHTML = "";

/* filterTemples Function */
// sortBy in the Criteria, filterTemples in the Assignment ? 
const filterTemples = (temples) => {
  reset();
  let filteredTemples = [];

  switch (filter.value) {
    case "utah":
      filteredTemples = templeList.filter((temple) => temple.location.includes("Utah"));
      break;
    case "notutah":
      filteredTemples = templeList.filter((temple) => !temple.location.includes("Utah"));
      break;
    case "older":
      filteredTemples = templeList.filter((temple) => new Date(temple.dedicated) < before1950);
      break;
    case "A-Z":
      filteredTemples = [...templeList].sort((a, b) => a.templeName > b.templeName);
      break;
    case "all":
      filteredTemples = templeList;
      break;
  }

  displayTemples(filteredTemples);
};

/* Event Listener */
filter.addEventListener("change", () => {
  filterTemples(templeList);
});

getTemples();
