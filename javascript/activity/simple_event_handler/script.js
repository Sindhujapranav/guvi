var div= document.createElement("div");
document.getElementById("zen").addEventListener("mouseover",mouseOver);
document.getElementById("zen").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("zen").style.color = "blue";
}

function mouseOut() {
  document.getElementById("zen").style.color = "black";
}
