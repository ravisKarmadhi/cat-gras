import "slick-carousel";

export class App {
  init() {
    $('.product-slider-home').slick({
      infinite: true,
      slidesToShow: 4,
      dots: false,
      fade: false,
      arrows: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: $(".slider-4-col .slick--prev"),
      nextArrow: $(".slider-4-col .slick--next"),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    $('.slider-range').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll:1,
      arrows:false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });


    $('.logo-slider').slick({
      infinite: true,
      dots: false,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.blog-slider').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      prevArrow: $(".blog-section .slick--prev"),
      nextArrow: $(".blog-section .slick--next"),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.gyo-kit-slider').slick({
      infinite: true,
      dots: false,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.delivery-month-slider').slick({
      infinite: true,
      dots: false,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.seeds-slider').slick({
      infinite: true,
      dots: false,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.gallery-slider-custom').slick({
      infinite: true,
      dots: false,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 6,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    });
  }
  slickSLider() { }
}
