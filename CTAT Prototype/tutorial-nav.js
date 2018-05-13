//- Grace Guo
//- May 8 2018
function play() {
  var x = (document.getElementsByClassName("focus"))[0];
  var elementID = x.id;
  var indexEnd = elementID.search("-");
  var index = elementID.slice(0, indexEnd);
  var index = parseInt(index);
  if (index == 0) {
    var b = document.getElementById("blackout");
    b.style.opacity = "0.0";
    var bt = document.getElementById("introButton");
    bt.style.display = "none";
    var newbt = document.getElementById("tuteButton");
    newbt.style.display = "grid";
    var newFocus = "1-a";
    var y = document.getElementById(newFocus);
    x.classList.remove("focus");
    y.classList.add("focus");
    x.style.display = "none";
    y.style.display = "block";
    var textFocus = String(index) + "-text";
    var newTextFocus = String(index+1) + "-text";
    var t = document.getElementById(textFocus);
    var newT = document.getElementById(newTextFocus);
    t.style.display = "none";
    newT.style.display = "block";
    var menuID = String(index) + "-menu";
    var newMenuID = String(index+1) + "-menu";
    var m = document.getElementById(menuID);
    var newM = document.getElementById(newMenuID);
    m.style.color = "black";
    newM.style.color = "#00568d";
  } else if (elementID.includes("a")) {
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
  if (index < 14 && index > 0) {
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
    var menuID = String(index) + "-menu";
    var newMenuID = String(index+1) + "-menu";
    var m = document.getElementById(menuID);
    var newM = document.getElementById(newMenuID);
    m.style.color = "black";
    newM.style.color = "#00568d";
  }
}

function back() {
  var x = (document.getElementsByClassName("focus"))[0];
  var elementID = x.id;
  var indexEnd = elementID.search("-");
  var index = elementID.slice(0, indexEnd);
  var index = parseInt(index);
  if (index > 0) {
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
    var menuID = String(index) + "-menu";
    var newMenuID = String(index-1) + "-menu";
    var m = document.getElementById(menuID);
    var newM = document.getElementById(newMenuID);
    m.style.color = "black";
    newM.style.color = "#00568d";
    if (index == 1) {
      var b = document.getElementById("blackout");
      b.style.opacity = "1.0";
      var newbt = document.getElementById("introButton");
      newbt.style.display = "grid";
      var bt = document.getElementById("tuteButton");
      bt.style.display = "none";
    }
  }
}

function menu() {
  var x = document.getElementById("menu");
  var y = document.getElementById("menuButton");
  var z = document.getElementById("blackout");
  if (x.classList.contains("visible")) {
    x.classList.remove("visible");
    x.style.width = "0px";
    y.style.right = "50px";
    y.style.transform = "translate(0, 0)"
    z.style.width = "0vw";
    z.style.left = "100%";
    z.style.opacity = "0.0";
  } else {
    x.classList.add("visible");
    x.style.width = "250px";
    y.style.right = "250px";
    y.style.transform = "translate(50%, 0)"
    z.style.width = "100vw";
    z.style.left = "0%";
    z.style.opacity = "1.0";
  }
}
