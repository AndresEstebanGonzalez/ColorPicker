let genBtn = document.getElementById("colorBtn");
let colorCircle = document.getElementById("colorCircle");

let minNumb = 1;
let maxNumb = 255;
let randomNumber = Math.random();

// Random number 1-255
function randNumb() {
  let randomR = Math.floor(
    Math.random() * (randomNumber * (maxNumb - minNumb + 1) + minNumb)
  );
  let randomG = Math.floor(
    Math.random() * (randomNumber * (maxNumb - minNumb + 1) + minNumb)
  );
  let randomB = Math.floor(
    Math.random() * (randomNumber * (maxNumb - minNumb + 1) + minNumb)
  );

  //RGB Variable for background
  let rgbValue = randomR + "," + randomG + "," + randomB;
  let rgbVariable = "rgb" + "(" + rgbValue + ")";
  colorCircle.style.backgroundColor = rgbVariable;
}

//Button clicked
function btnClicked() {
  genBtn.addEventListener("click", (e) => {
    randNumb();
  });
}

btnClicked();
