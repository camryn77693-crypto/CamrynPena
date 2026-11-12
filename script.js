console.log("JavaScript is connected!");

const BTN = document.getElementById("BTN");

if (BTN) {
  BTN.addEventListener("click", doSomething);
}

function doSomething() {
  alert("About Camryn coming up!");
}

const images = ["AI-Icon.png",
"Indesign-Icon.png", "Photoshop-Icon.png"];

let imageNumber = 0;

const galleryImage =
document.querySelector("#galleryImage");
const nextButton =
document.querySelector("#nextButton");
const previousButton =
document.querySelector("#previousButton");

nextButton.addEventListener("click",
function() {
imageNumber = imageNumber + 1;
if (imageNumber === images.length) {
imageNumber = 0;
}
galleryImage.src =
images[imageNumber];
});

previousButton.addEventListener("click",
function() {
imageNumber = imageNumber - 1;
if (imageNumber < 0) {imageNumber = images.length-1;}

galleryImage.src =
images[imageNumber];
});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (event) => {

const {width, height} = cursor.getBoundingClientRect()

cursor.style.left = `${event.clientX - width / 2}px`;
cursor.style.top = `${event.clientY - height / 2}px`;});


const HeaderTextElement = document.querySelector('.HeaderText');
HeaderTextElement.animate(
[
{ transform: "translate(0px, 20px) " },
{ transform: "translate(0px, 10px) " },
{ transform: "translate(0px, 20px) " }
], 
{ 
  duration: 2000, 
  iterations: Infinity 
}
);
