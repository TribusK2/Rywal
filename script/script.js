
$(document).ready(function(){
  $("#mainPic1").animate({"opacity" : "1"}, 1000)
  $("#mainConText1").animate({"left" : "15px", "opacity" : "1"}, 800, "linear");
  var prevScrollpos = window.pageYOffset;
  $(window).scroll(function(){
    var currentScrollPos = window.pageYOffset;

      // menu scroll effect
    if (currentScrollPos <= 20) {
      $("#brandLogo").css("height", "90px");
    } else {
      $("#brandLogo").css("height", "50px");
    }
      // menu scroll effect end

      // content scroll effect
    if (screen.width < 568){
      if (currentScrollPos >= 30) {
        $("#lineHorizontal").animate({"opacity" : "1"}, 1000, "linear");
        $("#mainConText2").animate({"padding-left" : "0px", "opacity" : "1"}, 1000, "linear");
      }
      if (currentScrollPos >= 80) {
        $("#mainPic2").animate({"left" : "0px", "opacity" : "1"}, 1000, "linear");
      }
    }else{
      if (screen.width > screen.height && screen.width < 992){
        if (currentScrollPos >= 350) {
          $("#lineHorizontal").animate({"opacity" : "1"}, 1000, "linear");
          $("#mainConText2").animate({"padding-left" : "0px", "opacity" : "1"}, 1000, "linear");
        }
        if (currentScrollPos >= 450) {
          $("#mainPic2").animate({"left" : "0px", "opacity" : "1"}, 1000, "linear");
        }
      }else{
        if (currentScrollPos >= 150) {
          $("#lineHorizontal").animate({"opacity" : "1"}, 1000, "linear");
          $("#mainConText2").animate({"padding-left" : "0px", "opacity" : "1"}, 1000, "linear");
        }
        if (currentScrollPos >= 300) {
          $("#mainPic2").animate({"left" : "0px", "opacity" : "1"}, 1000, "linear");
        }
      }
    }
      // content scroll effect end

      // road picture scroll effect
    if (prevScrollpos > currentScrollPos) {
      $("#roadPic").attr("src", "img/asphalt-road.jpg");
    } else {
      $("#roadPic").attr("src", "img/forest-road.jpg");
    }
    prevScrollpos = currentScrollPos;
      // road picture scroll effect end
  });
});




