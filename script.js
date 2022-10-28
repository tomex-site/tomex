import Show from "./showOnScroll.js";
let content = [
  // document.querySelector("#zoomPhoto > img:nth-child(2)"),
  // document.querySelector("body > div.footer-basic"),
  document.querySelector("#homeDiv"),
  // document.querySelector(".footer"),
  // document.querySelector("#homePhoto"),
  // document.querySelector("#galery"),
];

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
  fetch(`https://tomex.rybnik.pl//photos/${i}.jpeg`)
    .then((res) => {
      res.status == 200 ? addToGalery(i) : null;
    })
    .then((res) => {
      // console.clear();
    })

    .catch((err) => console.log(err));
}

function addToGalery(pictrueNr) {
  const photoSrc = `https://tomex.rybnik.pl/photos/${pictrueNr}.jpeg`;
  let photoElem = document.createElement("img");
  photoElem.src = photoSrc;
  galeryContainer.appendChild(photoElem);
}

let menuBtns = document.querySelectorAll(".menuBtns");
menuBtns = [...menuBtns];
// console.log(menuBtns);
menuBtns.forEach((e, i) => {
  e.addEventListener("click", () => {
    window.scrollTo(0, 0);
    closeZoomPhoto();
    // console.log(e);
    contentChange(i);
  });
});
function contentChange(i) {
  menuBtns.forEach((e) => {
    e.classList.remove("choosen");
  });
  menuBtns[i].classList.add("choosen");
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
  zoomphoto.parentElement.classList.remove("none");
  // zoomphoto.parentElement.classList.toggle("zoomPhoto");
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
// closeCross.addEventListener("click", () => {});

closeCross.onclick = () => {
  closeZoomPhoto();
};

function closeZoomPhoto() {
  let zoomphoto = document.querySelector("#zoomPhoto > img:nth-child(2)");
  zoomphoto.parentElement.classList.add("none");
}

// document.body.addEventListener("wheel", (e) => {
//   if (e.wheelDelta < 0) {
//     let x = document.querySelector("#fotter");
//     x.classList.remove("none");
//   } else {
//     let x = document.querySelector("#fotter");
//     x.classList.add("none");
//   }
// });

let sendBtn = document.querySelector("#sendBtn");
sendBtn.onclick = (event) => {
  event.preventDefault();
  console.log(document.getElementById("message").value);

  window.location.href = `mailto:name1@rapidtables.com?subject=${
    document.getElementById("name").value
  } - ${document.getElementById("subject").value}
  &body=${document.getElementById("message").value}`;
};

let callBtn = document.querySelector("#callIcon");
callBtn.addEventListener("click", () => {
  window.open("tel:+48728208628", "_self");
});
let messageBtn = document.querySelector("#messageIcon");
messageBtn.addEventListener("click", () => {
  window.open("sms:+48728208628", "_self");
});

if (!mobileStatus) {
  document.querySelector("#callIcon").classList.add("none");
  document.querySelector("#messageIcon").classList.add("none");
  document.querySelector("#menu > div:nth-child(1)").innerHTML =
    "Strona Główna";
  document.querySelector("#menu > div:nth-child(2)").innerHTML = "Galeria";
  document.querySelector("#menu > div:nth-child(3)").innerHTML = "Kontakt";
} else {
  document.querySelector("#maps").classList.add("none");
}
