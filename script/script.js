
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

    // menu scroll effect
  if (currentScrollPos <= 20) {
    $("#brandLogo").css("height", "90px")
    // document.getElementById("brandLogo").style.height = "90px";
  } else {
    $("#brandLogo").css("height", "50px")
    // document.getElementById("brandLogo").style.height = "50px";
  }
  
    // menu scroll effect end

    // road scroll effect
  if (prevScrollpos > currentScrollPos) {
    $("#roadPic").attr("src", "img/asphalt-road.jpg")
    // document.getElementById("roadPic").src = "img/asphalt-road.jpg";
  } else {
    $("#roadPic").attr("src", "img/forest-road.jpg")
    // document.getElementById("roadPic").src = "img/forest-road.jpg";
  }
  prevScrollpos = currentScrollPos;
    // road scroll effect end
}





