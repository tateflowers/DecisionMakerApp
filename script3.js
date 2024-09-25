function getFlower(){ 
  var seasonInput = document.getElementById("season").value;
var intentionInput = document.getElementById("intention").value;
var imgOutput;
var price = document.getElementById("slider").value


if (seasonInput == "summer" && price > 60 && intentionInput == "romance") {
    imgOutput = "csp.flowers/rose.png"
}
else if(seasonInput == "summer" && price < 60 && intentionInput == "romance") {
    imgOutput = "csp.flowers/poppy.png"
}

else if(seasonInput == "summer" && price < 60 && intentionInput == "celebration") {
    imgOutput = "csp.flowers/daffodil.png"
}
  
  else if(seasonInput == "summer" && price > 60 && intentionInput == "celebration") {
    imgOutput = "csp.flowers/marigold.png"
}
  else if(seasonInput == "spring" && price > 60 && intentionInput == "romance") {
    imgOutput = "csp.flowers/rose.png"
  
}
  else if(seasonInput == "fall" && price > 60 && intentionInput == "romance") {
    imgOutput = "csp.flowers/rose.png"
}
  else if(seasonInput == "winter" && price > 60 && intentionInput == "romance") {
    imgOutput = "csp.flowers/rose.png"
}
console.log(imgOutput);
    document.getElementById("flower").src = imgOutput;
}
else if(seasonInput == "spring" && price < 60 && intentionInput == "celebration") {
    imgOutput = "csp.flowers/tulip.png"
}
else if(seasonInput == "summer" && price > 60 && intentionInput == "celebration") {
    imgOutput = "csp.flowers/snapdragon.png"
}


function showPrice(){
    document.getElementById("price").innerHTML = document.getElementById("slider").value
}

// document.getElementById("output").value = seasonInput;
// document.getElementById("output").value = intentionInput;
document.getElementById("outputBox").src = imgOutput;
// document.getElementById("output").value = priceInput;
