
(function ($) {
  "use strict";
  var bostami = {
    m: function (e) {
      bostami.d();
      bostami.methods();
    },

    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },

    methods: function (e) {
      bostami.preloader_load();
      bostami.preloader();
      bostami.preloader_svg();
    },

    // preloader  function
    preloader: function () {
      $(window).on("load", function () {
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
          navigator.userAgent
        )
          ? true
          : false;
        var preloader = $("#preloader");

        if (!isMobile) {
          setTimeout(function () {
            preloader.addClass("preloaded");
          }, 800);
          setTimeout(function () {
            preloader.remove();
          }, 2000);
        } else {
          preloader.remove();
        }
      });
    },

    preloader_load: function () {
      $(window).on("load", function () {
        var speed = 500;
        setTimeout(function () {}, speed);
      });
    },

    preloader_svg: function () {
      $(window).on("load", function () {
        jQuery("img.svg").each(function () {
          var jQueryimg = jQuery(this);
          var imgClass = jQueryimg.attr("class");
          var imgURL = jQueryimg.attr("src");

          jQuery.get(
            imgURL,
            function (data) {
              // Get the SVG tag, ignore the rest
              var jQuerysvg = jQuery(data).find("svg");

              // Add replaced image's classes to the new SVG
              if (typeof imgClass !== "undefined") {
                jQuerysvg = jQuerysvg.attr("class", imgClass + " replaced-svg");
              }

              // Remove any invalid XML tags as per http://validator.w3.org
              jQuerysvg = jQuerysvg.removeAttr("xmlns:a");

              // Replace image with new SVG
              jQueryimg.replaceWith(jQuerysvg);
            },
            "xml"
          );
        });
      });
    },

  };
  bostami.m();
})(jQuery, window);