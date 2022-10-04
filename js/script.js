$(".search").click(function(){
    $("#search-part").slideDown()
  })
  
  $(".close").click(function(){
    $("#search-part").slideUp()
  })
  
$(".btt").click(function(){
    $("html,body").animate({
      scrollTop:0
    },100)
})
  
$(window).scroll(function(){
    if($(window).scrollTop() > 300){
      $("#menu").addClass("test")
    }else{
      $("#menu").removeClass("test")
    }
  
    if($(window).scrollTop() > 600){
      $(".btt").fadeIn()
    }else{
      $(".btt").fadeOut()
    }
})



$('.venobox').venobox();

$('.services_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    prevArrow: '<i class="fas fa-chevron-up prev"></i>',
    nextArrow: '<i class="fas fa-chevron-down next"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
        }
      }
    ]
});

$('.img_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    prevArrow: '<i class="fas fa-chevron-up prev"></i>',
    nextArrow: '<i class="fas fa-chevron-down next"></i>',
    asNavFor: ".details_slider",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
        }
      }
    ]
});
$('.details_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    arrows: false,
    asNavFor: ".img_slider",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          speed: 300,
        }
      },
      {
        breakpoint: 768,
        settings: {
          speed: 300,
        }
      },
      {
        breakpoint: 576,
        settings: {
          speed: 300,
        }
      }
    ]
});

 $('.counter').counterUp({
    delay: 10,
    time: 1000
});


$('.sponsor_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
});