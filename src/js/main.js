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
});
