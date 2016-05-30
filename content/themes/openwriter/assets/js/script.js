function parallax() {
  $(document).on("scroll", function () {
    var n = $(document).scrollTop(), o = -(n / 2);
    $("header.regular").css("top", o), $("header.regular .title-container").css("opacity", 1 - n / 300)
  })
}
$(document).ready(function () {
  parallax(), $("a#blog").on("click", function () {
    return $("html, body").animate({ scrollTop: $("#home-latest-post").offset().top }, 1e3), !1
  }), $("#show-nav").on("click", function () {
    return $("#hidden-nav").animate({ top: "0" }, 800), $("#hidden-nav").addClass("open"), !1
  }), $("#hide-nav").on("click", function () {
    return $("#hidden-nav").animate({ top: "-50vh" }, 800), $("#hidden-nav").removeClass("open"), !1
  })
});