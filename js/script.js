$('.sec2 .owl-carousel').owlCarousel({
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
        999:{
          items:2
      },
      1000:{
        items:3
    },
        1200:{
            items:4
        }
    }
})
$('.sec3 .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      }
  }
})
$('.sec4  .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
      0: {
          items: 1
      },
      800: {
          items: 2
      },
      1500: {
          items: 3
      }
  }
});

$('.sec5  .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
      0: {
          items: 1
      },
      800: {
          items: 2
      },
      1500: {
          items: 3
      }
  }
});
$('.sec8 .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  dots:false,
  nav:true,
  // autoplay: true,
  center: true,
  rtl:true,
  responsive:{
      0:{
          items:1,
          nav:true,
      },
      500:{
          items:2,
          nav:true,
      },
      992:{
          items:3,
          nav:true,
      },
      1200:{
          items:4.5,
          nav:true,
      }
    
  },
  // navText : ["<i class='fa fa-light fa-arrow-right'></i>","<i class='fa fa-light fa-arrow-left'></i>"]

})


const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

/**Navbar**/
$(document).ready(function() {
    var fixHeight = function() {
      $('.navbar-nav').css(
        'max-height',
        document.documentElement.clientHeight - 150
      );
    };
    fixHeight();
    $(window).resize(function() {
      fixHeight();
    });
    $('.navbar .navbar-toggler').on('click', function() {
      fixHeight();
    });
    $('.navbar-toggler, .overlay').on('click', function() {
      $('.mobileMenu, .overlay').toggleClass('open');
    });
  });

  
