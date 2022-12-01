const bodyElement = document.querySelector("body");

const colorInput1 = document.querySelector(".color.first");
colorInput1.setAttribute("type", "color");

const colorInput2 = document.querySelector(".color.second");
colorInput2.setAttribute("type", "color");

const gradientCard = document.querySelector(".gradientCard");

const colorName1 = document.querySelector(".name.first");
const colorName2 = document.querySelector(".name.second");

const colorValues = {
  colorValue1: "",
  colorValue2: "",
};

window.addEventListener("load", () => {
  const colorObject = JSON.parse(localStorage.getItem("colorStorage"));
  colorInput1.value = colorObject.colorValue1;
  colorName1.innerText = colorObject.colorValue1;
  colorInput2.value = colorObject.colorValue2;
  colorName2.innerText = colorObject.colorValue2;
  gradientCard.style.background = `linear-gradient(90deg, ${colorInput1.value} 0%, ${colorInput2.value} 100%)`;
});

const updateColors = () => {
  if (directionStatus) {
    gradientCard.style.background = `linear-gradient(90deg, ${colorInput1.value} 0%, ${colorInput2.value} 100%)`;
  } else {
    gradientCard.style.background = `radial-gradient(circle, ${colorInput1.value} 0%, ${colorInput2.value} 100%)`;
  }
  colorName1.innerText = colorInput1.value;
  colorName2.innerText = colorInput2.value;
};

colorInput1.addEventListener("change", () => {
  colorValues.colorValue1 = colorInput1.value;
  localStorage.setItem("colorStorage", JSON.stringify(colorValues));
  updateColors();
});

colorInput2.addEventListener("change", () => {
  colorValues.colorValue2 = colorInput2.value;
  localStorage.setItem("colorStorage", JSON.stringify(colorValues));
  updateColors();
});

const toggleButton = document.querySelector(".toggle");
const toggleText = document.querySelector(".knobs");

let directionStatus = true;
toggleButton.addEventListener("change", () => {
  directionStatus = !directionStatus;
  updateColors();
});