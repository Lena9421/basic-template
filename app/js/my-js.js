// acc

$(".js-acc-btn").on("click", function(e) {
  e.preventDefault();
  $(this)
    .parents(".js-acc-parent")
    .find(".acc__body")
    .slideToggle();
  $(this).toggleClass("active");
});

//  select-2
var basic_select = {
  init: function() {
    var $select = $(".js-select-basic select");

    if ($select.length != 0 && typeof $.fn.select2 == "function") {
      $select.each(function() {
        var parentElement = $(".js-select-basic");
        $(this).select2({
          theme: "basic",
          placeholder: $(this).attr("placeholder")
        });
      });
    }
  }
};

basic_select.init();
//  swiper
$(document).ready(function() {
  var mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    parallax: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
});
