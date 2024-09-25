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


console.log(imgOutput);
    document.getElementById("flower").src = imgOutput;
}


function showPrice(){
    document.getElementById("price").innerHTML = document.getElementById("slider").value
}

// document.getElementById("output").value = seasonInput;
// document.getElementById("output").value = intentionInput;
document.getElementById("outputBox").src = imgOutput;
// document.getElementById("output").value = priceInput;
