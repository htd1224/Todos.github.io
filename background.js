const images = ["img1.jpg","img2.jpg","img3.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
const container = document.querySelector(".container");
const body = document.querySelector("body");
bgImage.src = `img/${chosenImage}`;
//bgImage.alt = 'background images';
//body.prepend(bgImage);
//container.appendChild(bgImage);
//document.body.appendChild(bgImage);
document.body.style.backgroundImage = `url(img/${chosenImage})`;