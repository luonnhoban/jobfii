/*
 * Header Fixed
 * scrollEffect
 * show search
 * Categories slideToggle
 * accordion
 * parallax
 * goTop
 * counter
 * filter
 * popUpLightBox
 * gallery
 * flatProgressBar
 * load more
 * load more2
 * fasterPreview
 * UpImg
 * delete_img
 * tfTabs
 * btn nav menu
 * btnCategory
 * dropOptionForm
 * progressProduct
 * Modal_Right
 * rangeSlider
 * btnQuantity
 * stickSidebar
 * Switcher
 * preload
 * Hot news banner
 */

(function ($) {
  "use strict";

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  /* Header Fixed
  ------------------------------------------------------------------------------------- */
  var headerFixed = function () {
    if ($("header").hasClass("header-fixed")) {
      var nav = $("#header");

      if (nav.length) {
        var offsetTop = nav.offset().top,
          headerHeight = nav.height(),
          injectSpace = $("<div>", {
            height: headerHeight,
          });
        injectSpace.hide();

        if ($("header").hasClass("style-absolute")) {
          injectSpace.hide();
        } else {
          injectSpace.insertAfter(nav);
        }

        $(window).on("load scroll", function () {
          if ($(window).scrollTop() > offsetTop + headerHeight) {
            nav.addClass("is-fixed");
            injectSpace.show();
            $("#trans-logo").attr("src", "images/logo.png");
          } else {
            nav.removeClass("is-fixed");
            injectSpace.hide();
            $("#trans-logo").attr("src", "images/logo-white.png");
          }

          if ($(window).scrollTop() > 150) {
            nav.addClass("is-small");
          } else {
            nav.removeClass("is-small");
          }
        });
      }
    }
  };
  /* scrollEffect
  ------------------------------------------------------------------------------------- */
  var scrollEffect = function () {
    $(window).on("load scroll", function () {
      var headerHeight = $("#header").height();
      if ($(window).scrollTop() > 300) {
        $(".form-meta2").addClass("is-fixed");
      } else {
        $(".form-meta2").removeClass("is-fixed");
      }
      var heightside3 = $(".wrapper-author-page-title").height() + 80;
      var heightside = $(".wd-job-author2").height() + 80;
      var heightside2 = $(".wd-job-author").height() + 80;
      $(".cv-form-details.job-sg").css("top", heightside);
      $(".cv-form-details.job-sg").css("top", heightside2);
      $(".cv-form-details.job-sg").css("top", heightside3);
      if ($("#header").hasClass("header-fixed")) {
        $(".fixed-space").css("top", headerHeight);
        $(".cv-form-details.job-sg").css("top", heightside2 + headerHeight);
        $(".cv-form-details.job-sg").css("top", heightside + headerHeight);
        $(".cv-form-details.po-sticky.st2").css("top", headerHeight + 10);
        $(".cv-form-details.po-sticky.stc2").css("top", headerHeight + 10);
      }
    });
  };
  /* show search
  ------------------------------------------------------------------------------------- */
  var showsearch = function () {
    $(".icon-show-search").click(function () {
      $(".top-search").slideToggle("show");
    });
  };
  /* categories slideToggle
  ------------------------------------------------------------------------------------- */
  $(".categories_title").on("click", function () {
    $(this).toggleClass("active");
    $(".categories_menu_toggle").slideToggle("medium");
  });
  $(".categories_title2").on("click", function () {
    $(this).toggleClass("active");
    $(".categories_menu_toggle22").slideToggle("medium");
  });
  /* accordion
  ------------------------------------------------------------------------------------- */
  // var accordion = function () {
  //   var args = { duration: 600 };
  //   $(".flat-toggle .toggle-title.active").siblings(".toggle-content").show();
  //   $(".flat-toggle.enable .toggle-title").on("click", function () {
  //     $(this).closest(".flat-toggle").find(".toggle-content").slideToggle(args);
  //     $(this).toggleClass("active");
  //   });

  //   $(".flat-accordion .toggle-title").on("click", function () {
  //     if (!$(this).is(".active")) {
  //       $(this)
  //         .closest(".flat-accordion")
  //         .find(".toggle-title.active")
  //         .toggleClass("active")
  //         .next()
  //         .slideToggle(args);
  //       $(this).toggleClass("active");
  //       $(this).next().slideToggle(args);
  //     } else {
  //       $(this).toggleClass("active");
  //       $(this).next().slideToggle(args);
  //     }
  //   });

  //   $(".flat-accordion .flat-toggle").on("click", function () {
  //     if (!$(this).is(".active")) {
  //       $(this).find(".flat-toggle.active").toggleClass("active").next();
  //       $(this).toggleClass("active");
  //     } else {
  //       $(this).toggleClass("active");
  //     }
  //   });
  // };
  /* parallax
  ------------------------------------------------------------------------------------- */
  var parallax = function () {
    if ($(".parallax").length > 0) {
      if ($().parallax && isMobile.any() == null) {
        $(".parallax").parallax("50%", -0.5);
      }
    }
  };
  /* goTop
  ------------------------------------------------------------------------------------- */
  var goTop = function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 500) {
        $("#scroll-top").addClass("show");
      } else {
        $("#scroll-top").removeClass("show");
      }
    });

    $("#scroll-top").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 200);
    });
  };
  /* counter
  ------------------------------------------------------------------------------------- */
  var counter = function () {
    if ($(".wrap-counter").length > 0) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(".wrap-counter").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          if ($().countTo) {
            $(".wrap-counter")
              .find(".counter-number")
              .each(function () {
                var to = $(this).data("to"),
                  speed = $(this).data("speed"),
                  formatter = $(this).data("formatter");
                $(this).countTo({
                  to: to,
                  speed: speed,
                  formatter: formatter,
                });
              });
          }
          a = 0.1;
        }
      });
    }
  };
  /* filter
  ------------------------------------------------------------------------------------- */
  var filter = function () {
    if ($("div").hasClass("widget-filter-isotope")) {
      var $grid = $(".grid").isotope({
        itemSelector: ".element-item",
        layoutMode: "fitRows",
      });

      $(".filters-button-group").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });

      $(".button-group").each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on("click", "button", function () {
          $buttonGroup.find(".is-checked").removeClass("is-checked");
          $(this).addClass("is-checked");
        });
      });
    }
  };
  /* popUpLightBox
  ------------------------------------------------------------------------------------- */
  var popUpLightBox = function () {
    if ($(".lightbox-image").length) {
      $(".lightbox-image").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false,
      });
    }
    if ($(".lightbox-gallery").length) {
      $(".lightbox-gallery").magnificPopup({
        type: "image",
        zoom: {
          enabled: true,

          duration: 300,
          easing: "ease-in-out",
          opener: function (openerElement) {
            return openerElement.is("img")
              ? openerElement
              : openerElement.find("img");
          },
        },
        gallery: {
          enabled: true,
        },
      });
    }
  };
  /* gallery
  ------------------------------------------------------------------------------------- */
  var gallery = function () {
    if ($("div").hasClass("widget-dash-video")) {
      var slider = new Swiper(".gallery-slide", {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        loopedSlides: 3,
        navigation: {
          clickable: true,
          nextEl: ".swiper-button-next3",
          prevEl: ".swiper-button-prev3",
        },
      });

      var thumbs = new Swiper(".gallery-thumb", {
        slidesPerView: "auto",
        spaceBetween: 17,
        loop: true,
        slideToClickedSlide: true,
        slidesPerView: 3,
        breakpoints: {
          200: {
            slidesPerView: 2,
            spaceBetween: 17,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 17,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 17,
          },
        },
      });
      slider.controller.control = thumbs;
      thumbs.controller.control = slider;
    }
  };
  /* flatProgressBar
  ------------------------------------------------------------------------------------- */
  var flatProgressBar = function () {
    if ($(".chart-box").length > 0) {
      $(".chart-box").appear(
        function () {
          var bar = $(this).find(".chart").data("barcolor"),
            track = $(this).find(".chart").data("trackcolor"),
            size = $(this).find(".chart").data("size"),
            withh = $(this).find(".chart").data("withh"),
            text = $(this).find(".chart").data("text");
          $(this).find(".chart .text").append(text);
          $(".chart").easyPieChart({
            easing: "easeOut",
            lineWidth: withh,
            size: size,
            scaleColor: false,
            barColor: bar,
            trackColor: track,
            animate: 5000,
            onStep: function (from, to, percent) {
              $(this.el).find(".percent").text(Math.round(percent));
            },
          });
        },
        {
          offset: 400,
        }
      );
    }
  };
  /* loadmore
  ------------------------------------------------------------------------------------- */
  var loadmore = function () {
    $(".client-review .client-item").slice(0, 4).show();
    $(".client-review2 .client-item2").slice(0, 4).show();
    $(".load-btn").on("click", function (e) {
      e.preventDefault();
      $(".client-review .client-item:hidden").slice(0, 4).slideDown();
      $(".client-review2 .client-item2:hidden").slice(0, 4).slideDown();
      var action1 = $(".client-review .client-item:hidden");
      var action2 = $(".client-review2 .client-item2:hidden");
      if (action1.length == 0 || action2.length == 0) {
        $(this).fadeOut("slow");
      }
    });
  };
  /* loadmore2
  ------------------------------------------------------------------------------------- */
  var loadmore2 = function () {
    $(".fl-item").slice(0, 0).show();
    $(".fl-item2").slice(0, 0).show();

    $(".loadmore2").on("click", function (e) {
      e.preventDefault();

      $(".fl-item:hidden").slice(0, 1).slideDown();
      $(".fl-item2:hidden").slice(0, 1).slideDown();
      if ($(".fl-item:hidden").length == 0) {
        $(".loadmore2").hide();
      }
      if ($(".fl-item2:hidden").length == 0) {
        $("#loadmore2").hide();
      }
    });
  };

  $("#profileimg").click(function (e) {
    $("#tf-upload-img").click();
  });
  /* fasterPreview
  ------------------------------------------------------------------------------------- */
  function fasterPreview(uploader) {
    if (uploader.files && uploader.files[0]) {
      $("#profileimg").attr(
        "src",
        window.URL.createObjectURL(uploader.files[0])
      );
    }
  }
  $("#tf-upload-img").change(function () {
    fasterPreview(this);
  });

  /* UpImg
  ------------------------------------------------------------------------------------- */
  var UpImg = function () {
    $("#profileimg2").click(function (e) {
      $("#tf-upload-img2").click();
    });

    function fasterPreview(uploader) {
      if (uploader.files && uploader.files[0]) {
        $("#profileimg2").attr(
          "src",
          window.URL.createObjectURL(uploader.files[0])
        );
      }
    }

    $("#tf-upload-img2").change(function () {
      fasterPreview(this);
    });
  };
  /* delete_img
  ------------------------------------------------------------------------------------- */
  var delete_img = function (e) {
    $(".remove-file").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.closest(".file-delete").remove();
    });
  };
  /* tfTabs
  ------------------------------------------------------------------------------------- */
  var tfTabs = function () {
    $(".tf-tab").each(function () {
      $(this).find(".content-tab").children().hide();
      $(this).find(".content-tab").children().first().show();
      $(this)
        .find(".menu-tab")
        .children("div.user-tag, .btn-display, .ct-tab")
        .on("click", function (e) {
          e.preventDefault();
          var liActive = $(this).index();
          var contentActive = $(this)
            .siblings()
            .removeClass("active")
            .parents(".tf-tab")
            .find(".content-tab")
            .children()
            .eq(liActive);
          contentActive.addClass("active").fadeIn("slow");
          contentActive.siblings().removeClass("active");
          $(this)
            .addClass("active")
            .parents(".tf-tab")
            .find(".content-tab")
            .children()
            .eq(liActive)
            .siblings()
            .hide();
        });
    });
  };
  /* btn nav menu
  ------------------------------------------------------------------------------------- */
  var btnmenu = function () {
    $(document).on("click", ".menu-item-has-children-mobile", function () {
      var args = { duration: 600 };
      if ($(this).hasClass("active")) {
        $(this).children(".sub-menu-mobile").slideUp(args);
        $(this).removeClass("active");
      } else {
        $(".sub-menu-mobile").slideUp(args);
        $(this).children(".sub-menu-mobile").slideDown(args);
        $(".menu-item-has-children-mobile").removeClass("active");
        $(this).addClass("active");
      }
    });
  };
  /* btnCategory
  ------------------------------------------------------------------------------------- */
  var btnCategory = function () {
    $(document).on("click", ".categories-mobile", function () {
      var args = { duration: 600 };
      if ($(this).hasClass("active")) {
        $(this).children(".group-menu-category-mobile").slideUp(args);
        $(this).removeClass("active");
      } else {
        $(".group-menu-category-mobile").slideUp(args);
        $(this).children(".group-menu-category-mobile").slideDown(args);
        $(".categories-mobile").removeClass("active");
        $(this).addClass("active");
      }
    });
  };
  /* dropOptionForm 
  ------------------------------------------------------------------------------------- */
  var dropOptionForm = function () {
    if ($("select").length > 0) {
      $(
        "select:not(#billing_country):not(.country_select):not(#billing_state)"
      ).niceSelect();
    }
  };

  new WOW().init();

  /* progressProduct
  ------------------------------------------------------------------------------------- */
  var progressProduct = function () {
    if ($(".progress-item").length > 0) {
      $(".progress-item").appear(function () {
        $(this)
          .find("div.donat-bg")
          .each(function () {
            $(this)
              .find(".custom-donat")
              .delay(600)
              .animate(
                {
                  width: $(this).attr("data-percent"),
                },
                1000,
                "easeInCirc"
              );
            var txt = $(this).attr("data-percent");
            $(this).closest(".rating-details").find(".percent").text(txt);
          });
      });
    }
  };

  $(document).ready(function () {
    var height = $(window).height() + 20;
    $(".row-height").css("height", height);
    $(".row-height").css("max-height", height);
  });

  var setTimeIn = function () {
    if ($(".wd-popup-form").length > 0) {
      setTimeout(function () {
        $(".wd-popup-form").addClass("modal-menu--open");
      }, 3000);
    }
  };
  /* Modal_Right
  ------------------------------------------------------------------------------------- */
  var Modal_Right = function () {
    const body = $("body");
    const modalMenu = $(".sidebar-popup");
    const modalNav = $(".menu-mobile-popup");
    const modalMenu2 = $(".wd-popup-form");
    const modalMenu3 = $(".wd-popup-job-apply");
    const modalMenu4 = $(".wd-filter-radio");

    if (modalMenu.length) {
      const open = function () {
        modalMenu.addClass("modal-menu--open");
      };
      const close = function () {
        modalMenu.removeClass("modal-menu--open");
      };

      $(".button-filter").on("click", function () {
        open();
      });
      $(".modal-menu__backdrop, .title-button-group").on("click", function () {
        close();
      });
    }
    if (modalNav.length) {
      const open = function () {
        modalNav.addClass("modal-menu--open");
      };
      const close = function () {
        modalNav.removeClass("modal-menu--open");
      };

      $(".nav-filter").on("click", function () {
        open();
      });
      $(".modal-menu__backdrop, .title-button-group").on("click", function () {
        close();
      });
    }
    if (modalMenu2.length) {
      const close = function () {
        modalMenu2.addClass("modal-menu--close");
        modalMenu2.removeClass("modal-menu--open");
      };
      $(".modal-menu__backdrop, .title-button-group").on("click", function () {
        close();
      });
    }
    if (modalMenu3.length) {
      const open = function () {
        modalMenu3.addClass("modal-menu--open");
      };
      const close = function () {
        modalMenu3.removeClass("modal-menu--open");
      };
      $(".btn-popup").on("click", function () {
        open();
      });
      $(".modal-menu__backdrop").on("click", function () {
        close();
      });
    }
    if (modalMenu4.length) {
      $(".filter-radio").on("click", function () {
        modalMenu4.toggleClass("modal-menu--open");
      });
      $(document).on("click.filter-radio", function (a) {
        if (
          $(a.target).closest(".filter-radio, .wd-filter-radio").length === 0
        ) {
          modalMenu4.removeClass("modal-menu--open");
        }
      });
    }
  };
  /* rangeSlider
  ------------------------------------------------------------------------------------- */
  var rangeSlider = function () {
    if ($(".salary-slider-one").length) {
      $(".salary-slider-one .salary-slider").slider({
        range: true,
        min: 0,
        max: 50000,
        values: [17000, 24000],
        slide: function (event, ui) {
          $(".salary-slider-one .count").text(
            ui.values[0] + "$" + " - " + ui.values[1] + "$"
          );
        },
      });

      $(".salary-slider-one .count").text(
        $(".salary-slider").slider("values", 0) +
        "$" +
        " - " +
        $(".salary-slider").slider("values", 1) +
        "$"
      );
    }
  };
  /* ageSlider
  ------------------------------------------------------------------------------------- */
  var ageSlider = function () {
    if ($(".age-slider-one").length) {
      $(".age-slider-one .age-slider").slider({
        range: true,
        min: 0,
        max: 60,
        values: [15, 50],
        slide: function (event, ui) {
          $(".age-slider-one .count").text(
            ui.values[0] + " - " + ui.values[1]
          );
        },
      });

      $(".age-slider-one .count").text(
        $(".age-slider").slider("values", 0) +
        " - " +
        $(".age-slider").slider("values", 1)
      );
    }
  };
  /* btnQuantity
  ------------------------------------------------------------------------------------- */
  var btnQuantity = function () {
    $(".minus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > 1) {
        value = value - 1;
      }

      $input.val(value);
    });

    $(".plus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > 0) {
        value = value + 1;
      }

      $input.val(value);
    });
  };
  /* stickSidebar
  ------------------------------------------------------------------------------------- */
  var stickSidebar = function () {
    if ($(".sticky-sidebar").length) {
      $(".sticky-sidebar").theiaStickySidebar();
    }
  };

  var swClick = function () {
    function activeLayout() {
      $(".switcher-container")
        .on("click", "a.sw-light", function () {
          $(this).toggleClass("active");
          $("body").addClass("home-boxed");
        })
        .on("click", "a.sw-dark", function () {
          $(this).removeClass("active").addClass("active");
          $("body").removeClass("home-boxed");
          return false;
        });
    }
    activeLayout();
  };

  /* preload
  ------------------------------------------------------------------------------------- */
  var preload = function () {
    $(".preload").fadeOut("slow", function () {
      setTimeout(function () {
        $(".preload").remove();
      }, 1000);
    });
  };

  /* Dom Ready */
  $(function () {
    headerFixed();
    showsearch();
    dropOptionForm();
    flatProgressBar();
    // accordion();
    goTop();
    counter();
    setTimeIn();
    tfTabs();
    filter();
    stickSidebar();
    parallax();
    gallery();
    scrollEffect();
    btnQuantity();
    loadmore();
    loadmore2();
    UpImg();
    delete_img();
    Modal_Right();
    popUpLightBox();
    progressProduct();
    rangeSlider();
    ageSlider();
    btnmenu();
    swClick();
    btnCategory();
    preload();
  });
})(jQuery);

/* Hot news banner
  ------------------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.hot-news-block')) {
    const newsItems = document.querySelectorAll('.hot-news-block .hot-news-content p');
    let currentIndex = 0;

    function updateNews() {
      newsItems.forEach(item => {
        if (item.classList.contains('show')) {
          item.classList.remove('show');
        }
      });

      newsItems[currentIndex].classList.add('show');
      currentIndex = (currentIndex + 1) % newsItems.length;
    }

    updateNews()

    // Gọi hàm cập nhật tin tức mỗi 6 giây
    setInterval(updateNews, 4000);
  }
});

/* Show dropdown in Search input
  ------------------------------------------------------------------------------------- */

const searchJobInput = document.querySelector('.form-search-job input');
const dropdownJob = document.querySelector('.dropdown-job');

if (searchJobInput && dropdownJob) {
  searchJobInput.addEventListener('keyup', function () {
    const searchText = searchJobInput.value.trim();

    // Kiểm tra giá trị của input
    if (searchText) {
      // Nếu có giá trị, hiển thị dropdown
      dropdownJob.style.display = 'block';
    } else {
      // Nếu không có giá trị, ẩn dropdown
      dropdownJob.style.display = 'none';
    }

    dropdownJob.addEventListener('click', () => {
      dropdownJob.style.display = 'none';
    })
  });
}

const searchLocationInput = document.querySelector('.form-search-location input');
const dropdownLocation = document.querySelector('.dropdown-location');

if (searchLocationInput) {
  searchLocationInput.addEventListener('keyup', function () {
    const searchText = searchLocationInput.value.trim();

    // Kiểm tra giá trị của input
    if (searchText) {
      // Nếu có giá trị, hiển thị dropdown
      dropdownLocation.style.display = 'block';
    } else {
      // Nếu không có giá trị, ẩn dropdown
      dropdownLocation.style.display = 'none';
    }

    dropdownLocation.addEventListener('click', () => {
      dropdownLocation.style.display = 'none';
    })
  });
}

/* Job Category Slider
  ------------------------------------------------------------------------------------- */

$('.job-category-slider').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 2,
  arrows: false,
  dots: true,
  touchThreshold: 1000,
  swipe: true,
  autoplay: false,
  centerMode: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
  ]
});


/* List people connect, List company follow
  ------------------------------------------------------------------------------------- */

$('.list-7-col').slick({
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 2,
  arrows: false,
  dots: true,
  touchThreshold: 1000,
  swipe: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
  ]
});


/* List locations
  ------------------------------------------------------------------------------------- */

$('.list-locations').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: false,
  dots: true,
  touchThreshold: 1000,
  swipe: true,
  swipeToSlide: true,
  // autoplay: false,
  centerMode: true,
  centerPadding: '190px',
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: '80px',
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '60px',
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '36px',
      }
    },
  ]
});


/* List News
  ------------------------------------------------------------------------------------- */

$('.list-news.list-4-col').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  arrows: false,
  dots: true,
  touchThreshold: 1000,
  swipe: true,
  swipeToSlide: true,
  // autoplay: false,
  centerMode: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});


// Set the height of the slick-slide to the height of the slick-list.
// Lấy container cha của Slick Slider
const slickSlider = document.querySelectorAll('.slick-track');


// Đặt chiều cao cho các job-category-main
window.onload = () => {
  console.log(slickSlider);
  if (slickSlider) {
    slickSlider.forEach(slider => {
      // Lấy tất cả các job-category-main
      const slickSlideItem = slider.querySelectorAll('.slick-slide');

      // Tính toán chiều cao cần thiết
      const containerHeight = slider.offsetHeight;
      const itemHeight = containerHeight; // Đặt chiều cao của item bằng container

      slickSlideItem.forEach(item => {
        item.style.height = itemHeight + 'px';
      });
    })
  }
}


/* List Partner
------------------------------------------------------------------------------------- */

$('.list-partner').slick({
  infinite: true,
  slidesToShow: 11,
  slidesToScroll: 1,
  // variableWidth: true,
  arrows: false,
  dots: false,
  touchThreshold: 1000,
  swipe: true,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 9,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 7,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 6,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 3,
      }
    },
  ]
});


/* List Thumb Detail
  ------------------------------------------------------------------------------------- */

$('.list-thumb').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '.prev-arrow',
  nextArrow: '.next-arrow',
  dots: false,
  touchThreshold: 1000,
  swipe: true,
  swipeToSlide: true,
  centerMode: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  responsive: [
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
    },
  ]
});


/* List testimonials About us
  ------------------------------------------------------------------------------------- */

$('.list-testimonials').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: true,
  touchThreshold: 1000,
  swipe: true,
  swipeToSlide: true,
  // autoplay: false,
  centerMode: true,
  centerPadding: '190px',
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: '80px',
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '60px',
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '36px',
      }
    },
  ]
});


// Remove position sticky form-sticky apply job in detail page
// Get formSticky and list partners
const formSticky = document.querySelector('.form-sticky');

// let isFormStickySticky = true; // Sử dụng biến để kiểm tra trạng thái

if (formSticky) {
  // Thêm một sự kiện cuộn trang web.
  window.addEventListener('scroll', () => {
    const formStickyRect = formSticky.getBoundingClientRect();
    console.log(formStickyRect);
    if (formStickyRect.top <= 79) {
      formSticky.style.backgroundColor = '#FFFFFF'
    } else {
      formSticky.style.backgroundColor = 'unset'
    }
  });
}


// like, unlike heart icon
const likeBlocks = document.querySelectorAll('.icon-heart')

if (likeBlocks) {
  likeBlocks.forEach(likeBlock => {
    likeBlock.addEventListener('click', (e) => {
      e.preventDefault()
      if (likeBlock.classList.contains('liked')) {
        likeBlock.classList.remove('liked')
      } else {
        likeBlock.classList.add('liked')
      }

      // likeBlock.classList.toggle('liked')
    })
  })
}

// Add border purple for active question FAQs
const questionItems = document.querySelectorAll('.flat-toggle')

if (questionItems) {
  questionItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      item.classList.toggle('open')

      removeOpenAnswer(index)
    })
  })
}

function removeOpenAnswer(index1) {
  questionItems.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove('open')
    }
  })
}


// Open Modal pop up 
const modalPopup = document.querySelector('.modal-popup')
const modalPopupContainer = document.querySelector('.modal-popup-main')
const closeModalBtn = document.querySelector('.modal-close')

//Function show modal
function showModalPopup() {
  modalPopup.classList.add('open')
  document.querySelector('html').style.overflow = 'hidden'
}

//Function close modal
function removeModalPopup() {
  modalPopup.classList.remove('open')
  document.querySelector('html').style.overflow = 'unset'
}

// listen event click bag icon on header menu
const registerBtn = document.querySelectorAll('.register-btn')
if (registerBtn) {
  registerBtn.forEach(btn => {
    btn.addEventListener('click', showModalPopup)
  })
}

// listen event click on freelancer item
const freelancerItems = document.querySelectorAll('.freelancer-item .candidate-infor')
if (freelancerItems) {
  freelancerItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault
      showModalPopup()
    })
  })
}

//listen event click and close modal
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', removeModalPopup)
}

//listen event click outside modal-container and close modal
if (modalPopup) {
  modalPopup.addEventListener('click', removeModalPopup)
}

//Stop prevent default when click on container modal
if (modalPopupContainer) {
  modalPopupContainer.addEventListener('click', function (event) {
    event.stopPropagation()
  })
}



// Fixed sidebar in Term of use
const sectionFixed = document.querySelector('.section-fixed-sidebar');
const divToFix = document.querySelector('.section-fixed-sidebar .text-content');

if (sectionFixed && divToFix) {
  // Listen event scroll mouse
  window.addEventListener('scroll', () => {
    const sectionFixedRect = sectionFixed.getBoundingClientRect();
    const divToFixRect = divToFix.getBoundingClientRect();

    if (sectionFixedRect.top <= 20) {
      // When divToFixRect is 20px from the top of the page, 
      // add class "fixed-top" to divToFix need to fixed-top.
      divToFix.classList.add('fixed-top');
    } else {
      // Remove class "fixed-top".
      divToFix.classList.remove('fixed-top');
    }

    // Space from sectionFixed bottom to divToFix bottom
    const distanceToBottom = sectionFixedRect.bottom - divToFixRect.bottom;

    // if space from sectionFixed bottom to divToFix bottom less than or equal to 0,
    // Remove class fixed-top, add class fixed-bottom
    if (distanceToBottom <= 0) {
      divToFix.classList.add('fixed-bottom');
      divToFix.classList.remove('fixed-top');
    }
  });

  // Listen for mouse scroll events
  window.addEventListener('scroll', () => {
    const sectionFixedRect = sectionFixed.getBoundingClientRect();
    const divToFixRect = divToFix.getBoundingClientRect();

    if (sectionFixedRect.top <= 20 && divToFixRect.top >= 20) {
      divToFix.classList.add('fixed-top');
      divToFix.classList.remove('fixed-bottom');
    }
  })
}


// add, remove active list term
const termItems = document.querySelectorAll('.tab-term .ct-tab')
const listTerm = document.querySelector('.tab-term')

if (termItems) {
  termItems.forEach(item => {
    item.addEventListener('click', () => {
      listTerm.querySelector('.active').classList.remove('active')
      item.classList.add('active')
    })
  })
}


// Show more list testimonials
const loadmoreBtn = document.querySelector('.load-more-btn button')
const listReviews = document.querySelectorAll('.list-review')

if (loadmoreBtn) {
  loadmoreBtn.addEventListener('click', () => {
    listReviews.forEach(list => {
      if (list.classList.contains('d-none')) {
        const parentBtn = loadmoreBtn.parentElement

        setTimeout(() => {
          list.classList.remove('d-none')
          parentBtn.classList.add('d-none')
        }, 700)
      }
    })

    loadmoreBtn.querySelector('i').classList.remove('d-none')
    loadmoreBtn.querySelector('span').style.opacity = '0'
  })
}


if (document.getElementById("fileInput")) {
  document.getElementById("fileInput").addEventListener("change", function () {
    const fileInput = this;
    const selectedFileName = document.getElementById("selectedFileName");

    if (fileInput.files.length > 0) {
      // Nếu người dùng chọn tệp, hiển thị tên tệp lên nút tùy chỉnh
      selectedFileName.textContent = fileInput.files[0].name;
    } else {
      // Nếu không có tệp nào được chọn, đặt nút tùy chỉnh lại thành văn bản mặc định
      selectedFileName.textContent = "";
    }
  });
}