const genBtn = document.getElementById("colorBtn");
const colorCircle = document.getElementById("colorCircle");

const minNumb = 1;
const maxNumb = 255;
const randomNumber = Math.random();

// Random number 1-255
function generateNumber() {
  return Math.floor(
    Math.random() * (randomNumber * (maxNumb - minNumb + 1) + minNumb)
  );
}

function randNumb() {
  //RGB Variable for background
  let rgbValue =
    generateNumber() + "," + generateNumber() + "," + generateNumber();
  let rgbVariable = "rgb" + "(" + rgbValue + ")";
  colorCircle.style.backgroundColor = rgbVariable;
}

//Button clicked
genBtn.addEventListener("click", (e) => {
  randNumb();
});
