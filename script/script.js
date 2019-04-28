
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

      // index content scroll effect
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
      // index content scroll effect end

      // road picture scroll effect
      var allRoadPic = $(".roadPic");
      
    if (prevScrollpos > currentScrollPos) {
      $(allRoadPic[0]).fadeOut(100, function(){
        $(allRoadPic[1]).fadeIn(100);
      });
    } else {
      $(allRoadPic[1]).fadeOut(100, function(){
        $(allRoadPic[0]).fadeIn(100);
      });
    }
    prevScrollpos = currentScrollPos;
      // road picture scroll effect end
  });

  // hide collapsed menu
  $(window).click(function(){
    $("#navbarNav").collapse("hide");
  });
  // hide collapsed menu end

  // news collapse button text
  var newsButtonText = $('.buttonText');
  $(newsButtonText).click(function (){
    if ( $(this).hasClass("collapsed")) {
      $(this).text('. . . zwiń.');
    } else {
      $(this).text('Czytaj dalej . . .');
    }
  });
  // news collapse button text end

  // gallery carousel active display
  // var carouselItems = $(".carousel-item");
  // var carouselMinats = $(".carousel-indicators li");
  // var carouselChange = {class: true};
  // var carouselExecute = function(){
  // console.log(carouselItems);
  // console.log(carouselMinats);
  // }
  // var observer = new MutationObserver(carouselExecute);
  // observer.observe(carouselItems, carouselChange);
  // gallery carousel active display end
});




