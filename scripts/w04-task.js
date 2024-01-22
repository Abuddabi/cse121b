/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Egor Sotnikov",
  photo: "images/profile.jpg",
  favoriteFoods: [
    "Tacos",
    "Bacon",
    "Eggs",
    "Ice cream"
  ],
  hobbies: [
    "programming",
    "watching movies",
    "walking outdoors"
  ],
  placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  place: "Saint-Petersburg, Russia",
  length: "24 years"
});

myProfile.placesLived.push({
  place: "Pskov, Russia",
  length: "4 years"
});

myProfile.placesLived.push({
  place: "Krasnodar, Russia",
  length: "1.5 years"
});

/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
const img = document.querySelector("#photo");
img.setAttribute("src", myProfile.photo);
img.setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
const favFoodList = document.querySelector("#favorite-foods");
myProfile.favoriteFoods.forEach(food => {
  const li = document.createElement("li");
  li.textContent = food;
  favFoodList.appendChild(li);
});

/* Hobbies List */
const hobbiesList = document.querySelector("#hobbies");
myProfile.hobbies.forEach(hobby => {
  const li = document.createElement("li");
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});

/* Places Lived DataList */
const placesLivedList = document.querySelector("#places-lived");
myProfile.placesLived.forEach(placeObj => {
  const dt = document.createElement("dt");
  dt.textContent = placeObj.place;
  const dd = document.createElement("dd");
  dd.textContent = placeObj.length;
  placesLivedList.append(dt, dd);
});

