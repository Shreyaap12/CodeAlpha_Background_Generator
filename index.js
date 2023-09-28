//Pick the color

var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

function setBackground(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";
    h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);

color1.addEventListener("input", setBackground());
color2.addEventListener("input", setBackground());


// Random color generator

document.querySelector("#generate").addEventListener("click", getRandomColor);

function randomColor() {
    var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ','+ (Math.floor(Math.random() * 256)) +')';
    return color;
}

function getRandomColor() {
    var randomColor1 = randomColor();
    var randomColor2 = randomColor();
    body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 +")";
    h3.textContent = body.style.background + ";";
}


//To Copy 

document.querySelector("#copy").addEventListener("click", copyCSS);

function copyCSS(){
    const gradient ="background: " + body.style.background + ";";
    navigator.clipboard.writeText(gradient);
}

