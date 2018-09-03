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

$(document).ready(function() {
  $(".js-example-basic-single").select2();
});

/*Select2 Initlization*/

$(".js-example-basic-single").select2();

$(".js-example-basic-multiple").select2();

$("#singleSelectExample").select2({
  placeholder: "Select an option...",
  allowClear: true
});
$(".js-example-placeholder-single").select2({
  placeholder: "Select an option...",
  allowClear: true
});

$(".js-example-placeholder-multiple").select2({
  placeholder: "Select a option"
});

if ($(".js-menu-slider").length != 0) {
  var nSlides = $(".js-menu-slider").find(".swiper-slide").length;

  if (nSlides > 7) {
    var menuSwipper = new Swiper(".js-menu-slider", {
      slidesPerView: 6,
      spaceBetween: 0,
      nextButton: ".js-menu-slider-btn-next",
      prevButton: ".js-menu-slider-btn-prev"
    });
  }
}
