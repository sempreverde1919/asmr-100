let container = document.querySelector(".container");
let createBtn = document.querySelector("#submit-grid");
let clearBtn = document.querySelector("#clear-grid");
let eraseBtn = document.querySelector("#erase-btn");
let paintBtn = document.querySelector("#paint-btn");
let widthRange = document.querySelector("#width-range");
let widthValue = document.querySelector("#width-value");
let heightRange = document.querySelector("#height-range");
let heightValue = document.querySelector("#height-value");

let draw,
  width = 0,
  height = 0;

widthRange.addEventListener("input", () => {
  width = widthRange.value;
  if (width <= 9) {
    widthValue.innerHTML = `0${width}`;
  } else {
    widthValue.innerHTML = width;
  }
});
heightRange.addEventListener("input", () => {
  height = heightRange.value;
  if (height <= 9) {
    heightValue.innerHTML = `0${height}`;
  } else {
    heightValue.innerHTML = height;
  }
});

createBtn.addEventListener("click", () => {
  container.innerHTML = "";
  for (let i = 0; i < height; i++) {
    let row = document.createElement("div");
    row.classList.add("gridRow");
    for (let j = 0; j < width; j++) {
      let col = document.createElement("div");
      col.classList.add("gridCol");
      row.appendChild(col);
      col.addEventListener("mouseover", () => {
        if (draw) {
          if (draw === "paint") {
            col.style.backgroundColor = document.querySelector(
              "#color-input"
            ).value;
          } else {
            col.style.backgroundColor = "#fff";
          }
        }
      });
    }
    container.appendChild(row);
  }
});

clearBtn.addEventListener("click", () => {
  container.innerHTML = "";
  widthRange.value = 0;
  heightRange.value = 0;
  widthValue.innerHTML = widthRange.value;
  heightValue.innerHTML = heightRange.value;
});

eraseBtn.addEventListener("click", () => {
  eraseBtn.classList.toggle("clicked-button");
  paintBtn.classList.remove("clicked-button");
  draw === "erase" ? (draw = undefined) : (draw = "erase");
});

paintBtn.addEventListener("click", () => {
  paintBtn.classList.toggle("clicked-button");
  eraseBtn.classList.remove("clicked-button");
  draw === "paint" ? (draw = undefined) : (draw = "paint");
});
