
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

    // menu scroll effect
  if (currentScrollPos <= 20) {
    document.getElementById("brandLogo").style.height = "90px";
  } else {
    document.getElementById("brandLogo").style.height = "50px";
  }
  
    // menu scroll effect end

    // road scroll effect
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("roadPic").src = "img/asphalt-road.jpg";
  } else {
    document.getElementById("roadPic").src = "img/forest-road.jpg";
  }
  prevScrollpos = currentScrollPos;
    // road scroll effect end
}





