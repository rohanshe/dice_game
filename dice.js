var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomimage1 = "dice" + randomnumber1 + ".png";
var imagesourse1 = "./images/" + randomimage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imagesourse1);


var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomimage2 = "dice" + randomnumber2 + ".png";
var imagesourse2 = "./images/" + randomimage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imagesourse2);



if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";

} else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw !";
}

