async function getUsers() {
  let people = await fetch("https://randomuser.me/api/?results=10");
  let data = await people.json();
  const timeline = document.querySelector("#timeline");
  data.results.forEach((person) => {
    let image = document.createElement("img");
    image.src = person.picture.medium;
    timeline.appendChild(image);
  });
}
getUsers();
//async fetch of random profile pic generator
