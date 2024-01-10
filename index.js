function myBtn() {
    let element = document.getElementById("animateArrow");
    element.classList.toggle("arrowDown");

    let moreCntnt = document.getElementById("moreContent");

    if (moreCntnt.style.display == "block") {
        moreCntnt.style.display = "none";
    }
    else {
        moreCntnt.style.display = "block";
    }

}


var modal = document.getElementById("myModal");

var btn3 = document.getElementById("faqBtn");

var btn = document.getElementById("calvinBtn");
var btn1 = document.getElementById("versaceBtn");
var btn2 = document.getElementById("diorBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

btn1.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal.style.display = "block";
}

btn3.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}