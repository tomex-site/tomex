import Show from "./showOnScroll.js";
let content = [
  document.querySelector("#homeDiv"),
  document.querySelector("#homePhoto"),
  document.querySelector("#galery"),
];
window.scrollTo(0, 0);
new Show(content, false);

let photoSrcArray = [];
let galeryContainer = document.querySelector("#galery");
let homePhoto = document.querySelector("#homePhoto");

// let contentState = 0;
let constentDivs = [
  document.querySelector("#homeDiv"),
  document.querySelector("#galery"),
  document.querySelector("#contact"),
];

for (let i = 1; i < 50; i++) {
  fetch(`https://thelolos.github.io/strona-budownictwo/photos/${i}.png`)
    .then((res) => {
      res.status == 200 ? addToGalery(i) : null;
    })
    .then((res) => {
      // console.clear();
    })

    .catch((err) => console.log(err));
}

function addToGalery(pictrueNr) {
  const photoSrc = `https://thelolos.github.io/strona-budownictwo/photos/${pictrueNr}.png`;
  let photoElem = document.createElement("img");
  photoElem.src = photoSrc;
  galeryContainer.appendChild(photoElem);
}

let menuBtns = document.querySelectorAll(".menuBtns");
menuBtns = [...menuBtns];
// console.log(menuBtns);
menuBtns.forEach((e, i) => {
  e.addEventListener("click", () => {
    console.log(e);
    contentChange(i);
  });
});
function contentChange(i) {
  constentDivs.forEach((e) => e.classList.add("none"));
  constentDivs[i].classList.toggle("none");
  i !== 0
    ? homePhoto.classList.add("none")
    : homePhoto.classList.remove("none");
}

// console.log(allImages);

function changeZoomPhoto(src) {
  // console.log(src);
  let zoomphoto = document.querySelector("#zoomPhoto > img:nth-child(2)");
  zoomphoto.src = src;
  zoomphoto.parentElement.classList.toggle("none");
}

let galeryBtn = document.querySelector("#menu > div:nth-child(2)");

galeryBtn.addEventListener("click", (e) => {
  // console.log(e.target);

  let allImages = document.querySelectorAll("#galery > img");
  allImages = [...allImages];
  allImages.forEach((e) => {
    e.addEventListener("click", () => {
      // console.log(e);
      changeZoomPhoto(e.src);
    });
  });
});

let closeCross = document.querySelector("#closeCross");
closeCross.addEventListener("click", () => {
  let zoomphoto = document.querySelector("#zoomPhoto > img:nth-child(2)");
  zoomphoto.parentElement.classList.toggle("none");
});

document.body.addEventListener("wheel", (e) => {
  if (e.wheelDelta < 0) {
    let x = document.querySelector("#fotter");
    x.classList.remove("none");
  } else {
    let x = document.querySelector("#fotter");
    x.classList.add("none");
  }
});
