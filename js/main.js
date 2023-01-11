let nameInput = document.querySelector(".name-input");
let btn = document.querySelector(".btn");
let allTags = document.querySelector(".all-tags");
let clear = document.querySelector(".clear");
let tags = [];

function createTagGenerator(name) {
  // Random Background Color
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";

  const tag = {
    id: Date.now(),
    title: name,
    background: bgColor,
  };

  tags.push(tag);
  console.log(tags);
  generateHtml(tags);
}
function generateName() {
  if (nameInput.value !== "") {
    createTagGenerator(nameInput.value);
    nameInput.value = "";
  } else {
    window.alert("Enter Tag Name");
  }
}
btn.addEventListener("click", generateName);

function generateHtml(tags) {
  allTags.innerHTML = "";
  tags.forEach((tag) => {
    // create elements
    let container = document.createElement("div");
    let tagText = document.createElement("h1");
    tagText.appendChild(document.createTextNode(tag.title));
    let i = document.createElement("i");
    i.addEventListener("click", () => deleteSingleTag(tag.id));
    // set attributes and class's
    i.setAttribute("id", tag.id);
    container.classList.add("container");
    tagText.setAttribute("title", tag.title);
    i.classList.add("delete-icon", "fa-solid", "fa-xmark");
    // set style
    container.style.cssText = `background-color: ${tag.background}; grid-column: auto / span 2; display:flex; align-items: center; justify-content: space-between; padding:20px`;
    tagText.style.cssText =
      "width: 85%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis";
    i.style.cursor = "pointer";
    // append child's
    container.appendChild(tagText);
    container.appendChild(i);
    allTags.appendChild(container);
  });
}

function deleteSingleTag(id) {
  let updatedTags = tags.filter((tag) => tag.id != id);
  tags = updatedTags;
  generateHtml(tags);
}

function clearAll() {
  tags = [];
  generateHtml(tags);
}
clear.addEventListener("click", clearAll);
