//- Grace Guo
//- May 8 2018
function play() {
  var x = (document.getElementsByClassName("focus"))[0];
  var elementID = x.id;
  var indexEnd = elementID.search("-");
  var index = elementID.slice(0, indexEnd);
  var index = parseInt(index);
  if (elementID.includes("a")) {
    var newFocus = String(index) + "-gif";
    var y = document.getElementById(newFocus);
    x.classList.remove("focus");
    y.classList.add("focus");
    x.style.display = "none";
    y.style.display = "block";
  } else {
  }
}

function next() {
  var x = (document.getElementsByClassName("focus"))[0];
  var elementID = x.id;
  var indexEnd = elementID.search("-");
  var index = elementID.slice(0, indexEnd);
  var index = parseInt(index);
  var newFocus = String(index+1) + "-a";
  var textFocus = String(index) + "-text";
  var newTextFocus = String(index+1) + "-text";
  var y = document.getElementById(newFocus);
  var t = document.getElementById(textFocus);
  var newT = document.getElementById(newTextFocus);
  x.classList.remove("focus");
  y.classList.add("focus");
  x.style.display = "none";
  y.style.display = "block";
  t.style.display = "none";
  newT.style.display = "block";
}

function back() {
  var x = (document.getElementsByClassName("focus"))[0];
  var elementID = x.id;
  var indexEnd = elementID.search("-");
  var index = elementID.slice(0, indexEnd);
  var index = parseInt(index);
  if (index > 1) {
    var newFocus = String(index-1) + "-a";
    var textFocus = String(index) + "-text";
    var newTextFocus = String(index-1) + "-text"
    var y = document.getElementById(newFocus);
    var t = document.getElementById(textFocus);
    var newT = document.getElementById(newTextFocus)
    x.classList.remove("focus");
    y.classList.add("focus");
    x.style.display = "none";
    y.style.display = "block";
    t.style.display = "none";
    newT.style.display = "block";
  }
}

function menu() {
  var x = document.getElementById("menu");
  var y = document.getElementById("menuButton");
  if (x.classList.contains("visible")) {
    x.classList.remove("visible");
    x.style.width = "0px";
    y.style.right = "50px";
    y.style.transform = "translate(0, 0)"
  } else {
    x.classList.add("visible");
    x.style.width = "250px";
    y.style.right = "250px";
    y.style.transform = "translate(50%, 0)"
  }
}
