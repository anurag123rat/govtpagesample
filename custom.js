
(function($) {
    "use strict";
    $.fn.sliderResponsive = function(settings) {

      var set = $.extend(
        {
          slidePause: 5000,
          fadeSpeed: 800,
          autoPlay: "on",
          showArrows: "off",
          hideDots: "off",
          hoverZoom: "on",
          titleBarTop: "off"
        },
        settings
      );

      var $slider = $(this);
      var size = $slider.find("> div").length; //number of slides
      var position = 0; // current position of carousal
      var sliderIntervalID; // used to clear autoplay

      // Add a Dot for each slide
      $slider.append("<ul></ul>");
      $slider.find("> div").each(function(){
        $slider.find("> ul").append('<li></li>');
      });

      // Put .show on the first Slide
      $slider.find("div:first-of-type").addClass("show");

      // Put .showLi on the first dot
      $slider.find("li:first-of-type").addClass("showli")

       //fadeout all items except .show
      $slider.find("> div").not(".show").fadeOut();

      // If Autoplay is set to 'on' than start it
      if (set.autoPlay === "on") {
          startSlider();
      }

      // If showarrows is set to 'on' then don't hide them
      if (set.showArrows === "on") {
          $slider.addClass('showArrows');
      }

      // If hideDots is set to 'on' then hide them
      if (set.hideDots === "on") {
          $slider.addClass('hideDots');
      }

      // If hoverZoom is set to 'off' then stop it
      if (set.hoverZoom === "off") {
          $slider.addClass('hoverZoomOff');
      }

      // If titleBarTop is set to 'on' then move it up
      if (set.titleBarTop === "on") {
          $slider.addClass('titleBarTop');
      }

      // function to start auto play
      function startSlider() {
        sliderIntervalID = setInterval(function() {
          nextSlide();
        }, set.slidePause);
      }

      // on mouseover stop the autoplay and clear interval
      $slider.mouseover(function() {
        clearInterval(sliderIntervalID);
      });

      // on mouseout starts the autoplay by calling startSlider
      $slider.mouseout(function() {
        startSlider();
      });

      //on right arrow click
      $slider.find("> .right").click(nextSlide)

      //on left arrow click
      $slider.find("> .left").click(prevSlide);

      // Go to next slide
      function nextSlide() {
        position = $slider.find(".show").index() + 1;
        if (position > size - 1) position = 0;
        changeCarousel(position);
      }

      // Go to previous slide
      function prevSlide() {
        position = $slider.find(".show").index() - 1;
        if (position < 0) position = size - 1;
        changeCarousel(position);
      }

      //when user clicks slider button
      $slider.find(" > ul > li").click(function() {
        position = $(this).index();
        changeCarousel($(this).index());
      });

      //this changes the image and button selection
      function changeCarousel() {
        $slider.find(".show").removeClass("show").fadeOut();
        $slider
          .find("> div")
          .eq(position)
          .fadeIn(set.fadeSpeed)
          .addClass("show");
        // The Dots
        $slider.find("> ul").find(".showli").removeClass("showli");
        $slider.find("> ul > li").eq(position).addClass("showli");
      }

      return $slider;
    };
  })(jQuery);



  //////////////////////////////////////////////
  // Activate each slider - change options
  //////////////////////////////////////////////
  $(document).ready(function() {

    $("#slider1").sliderResponsive({
    // Using default everything
      // slidePause: 5000,
      // fadeSpeed: 800,
      // autoPlay: "on",
      // showArrows: "off",
      // hideDots: "off",
      // hoverZoom: "on",
      // titleBarTop: "off"
    });

    $("#slider2").sliderResponsive({
      fadeSpeed: 300,
      autoPlay: "off",
      showArrows: "on",
      hideDots: "on"
    });

    $("#slider3").sliderResponsive({
      hoverZoom: "off",
      hideDots: "on"
    });

  });


















// Play Button Animation




  $('#play-video').on('click', function(e){
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
  });

  $('.video-overlay, .video-overlay-close').on('click', function(e){
    e.preventDefault();
    close_video();
  });

  $(document).keyup(function(e){
    if(e.keyCode === 27) { close_video(); }
  });

  function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
  };

  // Play Button Animation




  // Image Gallery section home page

  $('.img-content').click(function(){
    var url=$(this).attr('src');
    var newUrl=$('#expandedImg').attr('src');
    $('#expandedImg').attr('src',url);
    $(this).attr('src',newUrl)
  });
    // Image Gallery section home page ends

    // bottom carousel slider infinite loop

    const list = document.querySelector("#list");
    const listContent = Array.from(list.children);

    listContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden",true);
      list.appendChild(duplicatedItem);
    });
       // bottom carousel slider infinite loop ends

       $(document).ready(function(){
        $(".owl-carousel").owlCarousel();
      });


      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })