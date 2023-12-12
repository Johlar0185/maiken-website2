//services, tredje billede

const serIll1 = document.querySelector(".ser_ill_1");
const currentImgPath = serIll1.src.substring(
  serIll1.src.indexOf("images", +1) + 7
);
const url = "http://127.0.0.1:5500/";
const image1Array = [
  "ma1.png",
  "ma2.png",
  "ma3.png",
  "ma4.png",
  "ma5.png",
  "ma6.png",
];
serIll1.addEventListener("click", handleImage1);
let newSrc = 0;
function handleImage1() {
  image1Array.forEach((img, index) => {
    if (currentImgPath === img) {
      newSrc += 1;
    }
  });
  if (image1Array.length === newSrc) {
    serIll1.src = `images/${image1Array[0]}`;
    newSrc = 0;
  } else {
    serIll1.src = `images/${image1Array[newSrc]}`;
  }
}

// services, andet billede

const serIll2 = document.querySelector(".ser_ill_2");
const currentImgPath2 = serIll2.src.substring(
  serIll2.src.indexOf("images", +1) + 7
);
const url2 = "http://127.0.0.1:5500/";
const image2Array = [
  "mo7.png",
  "mo8.png",
  "mo9.png",
  "mo10.png",
  "mo11.png",
  "mo12.png",
  "mo13.png",
];
serIll2.addEventListener("click", handleImage2);
let newSrc2 = 0;
function handleImage2() {
  image2Array.forEach((img, index) => {
    if (currentImgPath2 === img) {
      newSrc2 += 1;
    }
  });
  if (image2Array.length === newSrc2) {
    serIll2.src = `images/${image2Array[0]}`;
    newSrc2 = 0;
  } else {
    serIll2.src = `images/${image2Array[newSrc2]}`;
  }
}

// services, første billede

const serIll3 = document.querySelector(".ser_ill_3");
const currentImgPath3 = serIll3.src.substring(
  serIll3.src.indexOf("images", +1) + 7
);
const url3 = "http://127.0.0.1:5500/";
const image3Array = [
  "s14.png",
  "s15.png",
  "s15.png",
  "s16.png",
  "s17.png",
  "s18.png",
  "s19.png",
  "s20.png",
];
serIll3.addEventListener("click", handleImage3);
let newSrc3 = 0;
function handleImage3() {
  image3Array.forEach((img, index) => {
    if (currentImgPath3 === img) {
      newSrc3 += 1;
    }
  });
  if (image3Array.length === newSrc3) {
    serIll3.src = `images/${image3Array[0]}`;
    newSrc3 = 0;
  } else {
    serIll3.src = `images/${image3Array[newSrc3]}`;
  }
}
