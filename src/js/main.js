import $ from 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap';
import 'select2/dist/js/select2.min.js';
import '../../node_modules/masonry-layout/dist/masonry.pkgd.min';

import { App } from './parts/app.js'
import { Plugins } from './parts/plugins.js'
import { Parts } from './parts/parts.js'


// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$(function () {

  window.windowWidth = $(window).width();
  window.windowHeight = $(window).height();

  window.isiPhone = navigator.userAgent.toLowerCase().indexOf('iphone');
  window.isiPad = navigator.userAgent.toLowerCase().indexOf('ipad');
  window.isiPod = navigator.userAgent.toLowerCase().indexOf('ipod');

  //Functions List Below

  window.app = new App();
  window.app.init();

  window.plugins = new Plugins();
  window.plugins.init();

  window.parts = new Parts();
  window.parts.init();
});

// ===========================================================================

$(window).scroll(function () {
  var sticky = $("header"),
    scroll = $(window).scrollTop();
  if (scroll >= 50) {
    sticky.addClass("header-fixed");
    sticky.removeClass("header-fixed-os");
  }
  else {
    sticky.removeClass("header-fixed");
    sticky.addClass("header-fixed-os");
  }
});

$(document).ready(function () {
  var prevScrollPos = window.pageYOffset;

  $(window).scroll(function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      $("header").removeClass("hidden");
    } else {
      $("header").addClass("hidden");
    }

    prevScrollPos = currentScrollPos;
  });
});

// $(document).ready(function () {
//   var menuLink = $('.main-menu-link');
//   var subMenu = $('.menu-sub-menu');
//   var subMenu = $('.menu-sub-menu');

//   menuLink.click(function (e) {
//     e.preventDefault();
//     subMenu.toggleClass('d-block');
//     subMenu.removeClass('d-none');
//   });
//   subMenu.mouseleave(function () {
//     subMenu.removeClass('d-block');
//   });
// });

$(document).ready(function () {

  $(document).ready(function () {
    function updateClassThree() {
        var windowWidth = $(window).width();
        if (windowWidth >= 1200) {
          if ($('header').hasClass('transparent-header')) {
            $(".hover-drop-down").on("mouseenter", function () {
              $("header").addClass("primary-header bg-white");
              $("header").removeClass("transparent-header");
            });
            $(".hover-drop-down").on("mouseleave", function () {
              $("header").removeClass("primary-header bg-white");
              $("header").addClass("transparent-header");
            });
          }
          else if ($('header').hasClass('lightPrimary-header')) {
            $(".hover-drop-down").on("mouseenter", function () {
              $("header").addClass("primary-header bg-white");
              $("header").removeClass("lightPrimary-header");
            });
            $(".hover-drop-down").on("mouseleave", function () {
              $("header").removeClass("primary-header bg-white");
              $("header").addClass("lightPrimary-header");
            });
          }
          else if ($('header').hasClass('tomato-header')) {
            $(".hover-drop-down").on("mouseenter", function () {
              $("header").addClass("bg-white");
            });
            $(".hover-drop-down").on("mouseleave", function () {
              $("header").removeClass("bg-white");
            });
          }
          else if ($('header').hasClass('orange-header')) {
            $(".hover-drop-down").on("mouseenter", function () {
              $("header").addClass("bg-white");
            });
            $(".hover-drop-down").on("mouseleave", function () {
              $("header").removeClass("bg-white");
            });
          }
          else {
            $(".hover-drop-down").on("mouseenter", function () {
              $("header").addClass("bg-white");
            });
            $(".hover-drop-down").on("mouseleave", function () {
              $("header").removeClass("bg-white");
            });
          }
        }
    }
    updateClassThree();
    $(window).resize(function () {
        updateClassThree();
    });
  });


});


$("#open-search-box").click( function () {
  $(".menu-links").addClass("d-none");
  $(".menu-links").removeClass("d-xl-flex");
  $(".menu-btn").addClass("d-none");
  $(".menu-btn").removeClass("d-xl-flex");
  $(".custom-search-box").removeClass("d-none");
  $("header").addClass("custom-padding");
  $("#add-position").addClass("position-relative");
});


$("#close-custom-search").click( function () {
  $(".menu-links").removeClass("d-none");
  $(".menu-links").addClass("d-xl-flex");
  $(".menu-btn").removeClass("d-none");
  $(".menu-btn").addClass("d-xl-flex");
  $(".custom-search-box").addClass("d-none");
  $("header").removeClass("custom-padding");
  $("#add-position").removeClass("position-relative");
});

$(document).ready(function () {
  function updateClass() {
      var windowWidth = $(window).width();
      if (windowWidth >= 0 && windowWidth <= 1200) {
          $('.transparent-header').removeClass('transparent-header').addClass('primary-header');
      }
  }
  updateClass();
  $(window).resize(function () {
      updateClass();
  });
});

$(".burgur-menu").click( function () {
  $("header").addClass("vh-100 overflow-y-auto bg-white");
  $("html").addClass("overflow-hidden");
  $(".menu-links").removeClass("d-none");
  $(".menu-btn").removeClass("d-none");
  $(".menu-btn").addClass("ms-0");
  $(".search-res-tab").removeClass("d-none");
  $(".burgur-menu").addClass("d-none");
  $(".burgur-close").removeClass("d-none");
  $(document).ready(function () {
    function updateClassNew() {
        var windowWidth = $(window).width();
        if (windowWidth >= 0 && windowWidth <= 1200) {
            $('.lightPrimary-header').removeClass('lightPrimary-header').addClass('primary-header res-primary-header');
        }
    }
    updateClassNew();
    $(window).resize(function () {
        updateClassNew();
    });
  });
});

$(".burgur-close").click( function () {
  $("header").removeClass("vh-100 overflow-y-auto bg-white");
  $("html").removeClass("overflow-hidden");
  $(".menu-links").addClass("d-none");
  $(".menu-btn").addClass("d-none");
  $(".menu-btn").removeClass("ms-0");
  $(".search-res-tab").addClass("d-none");
  $(".burgur-menu").removeClass("d-none");
  $(".burgur-close").addClass("d-none");
  $(".menu-sub-menu").addClass("d-none");
  $(".main-menu-link").removeClass("d-none");
  $(".menu-links").addClass("mb-4 pb-4");

  $(document).ready(function () {
    function updateClassRess() {
        var windowWidth = $(window).width();
        if (windowWidth >= 0 && windowWidth <= 1200) {
            $('.res-primary-header').removeClass('primary-header').addClass('lightPrimary-header');
        }
    }
    updateClassRess();
    $(window).resize(function () {
        updateClassRess();
    });
  });
});

$("#open-res-menu").click( function () {
  $(document).ready(function () {
    function updateClassTwo() {
        var windowWidth = $(window).width();
        if (windowWidth >= 0 && windowWidth <= 1200) {
          $(".menu-sub-menu").removeClass("d-none");
          $("html").addClass("overflow-hidden");
          $(".menu-btn").addClass("d-none");
          $(".search-res-tab").addClass("d-none");
          $(".main-menu-link").addClass("d-none");
          $(".menu-links").removeClass("mb-4 pb-4");
        }
    }
    updateClassTwo();
    $(window).resize(function () {
        updateClassTwo();
    });
  });
});