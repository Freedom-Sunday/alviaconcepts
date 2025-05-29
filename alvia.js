$(document).ready(function () {
  $(".links-con").hide();
  $("#collapse").hide();

  $("#expand").click(function (e) {
    e.preventDefault();

    $(".links-con").slideDown();

    $(this).hide();
    $("#collapse").show();
  });

  $("#collapse").click(function (e) {
    e.preventDefault();

    $(".links-con").slideUp();
    $(this).hide();
    $("#expand").show();
  });

  // create a click function to scroll to the top of the page
  $("#homebtn").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // create a click function to scroll to a particular element on the page
  $("#aboutbtn").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $('#about-container').offset().top }, "slow");
  });

  $("#partnerbtn").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $('#partners').offset().top }, "slow");
  });

  $("#addressbtn").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $('#address-con').offset().top }, "slow");
  });

  $(".hero-texts").hide();
  $(".hero-texts").fadeIn(5000);

  
});
