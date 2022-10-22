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
console.log(menuBtns);
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

let allImages = document.querySelectorAll("#galery > img");
allImages = [...allImages];
console.log(allImages);

//   allImages.forEach((e) => {
//     e.addEventListener("click", () => {
//       console.log(e);
//       changeZoomPhoto(e.src);
//     });})

// function changeZoomPhoto(src) {
//   console.log(src);
// }
 
  let galeryBtn document.qUER