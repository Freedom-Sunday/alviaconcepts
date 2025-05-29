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

  $('.hero-texts').hide();
  $('.hero-texts').fadeIn(5000);

  
});
