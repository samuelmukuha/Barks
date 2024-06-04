// fetch images and place them in the dom
document.addEventListener("DOMContentLoaded", () => {
  getImages();
});

document.getElementById("form").addEventListener("submit", () => {
  alert("The form data will be sent to HappyBarks@gmail.com");
});

function getImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/8";
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((json) => renderImg(json));
}

function renderImg(images) {
  images.message.forEach((image) => {
    const imageContainer = document.createElement("div");
    imageContainer.setAttribute("id", "imageCont");
    imageContainer.style.margin = "auto";
    const img = document.createElement("img");
    img.src = image;
    img.style.height = "200px";

    imageContainer.appendChild(img);
    document.getElementById("reviews").appendChild(imageContainer);
  });
}

// get data from the form
const form = document.querySelector("#commentsform");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const com = document.querySelector("#commentbox");
  const p = document.createElement("p");
  p.innerHTML = `Sam Smith : ${com.value}`;
  p.addEventListener("click", () => {
    p.innerHTML = "";
  });
  document.querySelector("#words").appendChild(p);
  e.target.reset();
  p;
});

// the todo app

const taskform = document.querySelector("#taskform");
taskform.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = document.querySelector("#task");
  const li = document.createElement("li");
  const ul = document.querySelector("#tasklist");
  li.innerHTML = task.value;
  ul.appendChild(li);

  li.addEventListener("click", () => {
    li.style.textDecoration = "line-through 3px red solid";
  });
  li.addEventListener("dblclick", () => {
    li.innerHTML = "";
  });
  event.target.reset();
});
  