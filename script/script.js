
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
      if(document.getElementById("roadPic")){
      var roadPic = document.getElementById("roadPic");
      var roadPicSrc = roadPic.getAttribute("src");
      };
      
      if (prevScrollpos < currentScrollPos) {
        if(roadPicSrc == "img/forest-road.jpg"){
          roadPic.setAttribute("src", "img/forest-road.jpg");
          roadPic.setAttribute("alt", "Gruntowa droga w lesie");
        }else{
          $(roadPic).fadeOut(200, function(){
            roadPic.setAttribute("src", "img/forest-road.jpg");
            roadPic.setAttribute("alt", "Gruntowa droga w lesie");
            $(roadPic).fadeIn(200);
          });
        };
      } else {
        if(roadPicSrc == "img/asphalt-road.jpg"){
          roadPic.setAttribute("src", "img/asphalt-road.jpg");
          roadPic.setAttribute("alt", "Droga asfaltowa");
        }else{
          $(roadPic).fadeOut(200, function(){
            roadPic.setAttribute("src", "img/asphalt-road.jpg");
            roadPic.setAttribute("alt", "Droga asfaltowa");
            $(roadPic).fadeIn(200);
          });
        };
      };
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
    if ($(this).hasClass('collapsed')) {
      $(this).text('. . . zwiń.');
    } else {
      $(this).text('Czytaj dalej . . .');
    }
  });
  // news collapse button text end

  // gallery carousel active display
  var carouselItem = $('.carousel-item');
  var carouselPrev = $('.carousel-indicators li');
  var event = {attributes: true,                  // set items to listener
                childList: false,
                characterData: false};            
  var callback = function(){                      // define function to start when class changed
    carouselPrev.each(function(){
        for (i = 0; i < carouselItem.length; i++){
          if ($(carouselItem[i]).hasClass('active')){
            $(carouselPrev[i]).addClass('active');
          } else {
            $(carouselPrev[i]).removeClass('active')
          }
        }
    })
  };
  var observer = new MutationObserver(callback);  // set MutationObserver event
  carouselItem.each(function(){            // start MutationObserver event and define which elements too
    observer.observe(this, event)
  });
  // gallery carousel active display end

  // gallery modal content display
  var caruousels = $('.carousel-inner');
  caruousels.click(function(){
    var image = $(this).find('.active').find('img');
    var imageeSrc = image.attr('src');
    $('.modal-body').find('img').attr('src', imageeSrc);
  });
  // gallery modal content display end

  // text carousel
  var allQuotes = $('.textCarousel');
  var currentQuote = 0;
  function changeQuote(){
    $(allQuotes[currentQuote]).fadeOut(200, function(){
      if(currentQuote == allQuotes.length - 1){
        currentQuote = 0;
      } else {
        currentQuote++;
      }
      $(allQuotes[currentQuote]).fadeIn(200);  
    });
  };
  var quoteTimer = setInterval(changeQuote, 5000);
  // text carousel end

  // service collapse table button
  var tableButton = $('#buttonTable');
  var buttonButton = $('#buttonButton');
  $(tableButton).click(function (){
    if ($(this).hasClass('collapsed')) {
      $('#tableEnd').toggle(1000);
      $(buttonButton).children('i').removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up');
    } else {
      $('#tableEnd').toggle(700);
      $(buttonButton).children('i').removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
      window.location.href = "#truckTable";
    }
  });
  // service collapse table button end

  // Button action
    // Button action delay
  var btn = $('form').children('#submit');
  var val = 10;
  var submitInterval = setInterval(counter, 1000);
  function counter(){
    if(val>0){
      btn.val(val);
      val -=1
    }else{
      btn.val('Aplikuj');
      btn.removeClass('counter');
      clearInterval(submitInterval);
    }
  };
    // Button action delay end

    // GET to confirmation form
    $('#form').submit(function() {
      var name = $('#input1').val();
      var sName = $('#input2').val();
      var email = $('#email').val();
      if (typeof(Storage) !== "undefined") {
          sessionStorage.setItem('name', name);
          sessionStorage.setItem('sName', sName);
          sessionStorage.setItem('email', email);
      } else {
        alert('Twoja przeglądarka nie wspiera "sessionStorage" i twoje zgłoszenie nie może być wysłane. Zaktualizuj swoją przeglądarkę do najnowszej wersji lub spróbuj uzyć innej przeglądarki.')
      }
    });
    // GET to confirmation form end
  // Button action end

  // Confirmation form
    // Fulfill value
    var nameConfirmed = sessionStorage.getItem('name');
    var sNameConfirmed = sessionStorage.getItem('sName');
    var emailConfirmed = sessionStorage.getItem('email');
    $('#input1Confirmed').val(nameConfirmed);
    $('#input2Confirmed').val(sNameConfirmed);
    $('#emailConfirmed').val(emailConfirmed);
    // Fulfill value end

    // back button
    var backButton = $('#backButton');
    backButton.click(function(){
      window.location.href = "career.html";
    });
    // back button end

  // Confirmation form end

});





