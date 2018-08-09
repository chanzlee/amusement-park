
$(document).ready(function() {

  $("button#ageInput").click(function() {
    var iHeight = parseInt(prompt("What is your height in cm?"));
    $(".adult").addClass("initially-grey");
    $(".kid").addClass("initially-grey");
    $(".all").addClass("initially-grey");
    if (iHeight <= 50) {
      alert("too small")
    } else if (iHeight > 250) {
      alert("too tall")
    } else if (iHeight <= 250 && iHeight > 125) {
      $(".adult").toggleClass("initially-grey");
      $(".all").toggleClass("initially-grey");
    } else if (iHeight <= 125) {
      $(".kid").toggleClass("initially-grey");
      $(".all").toggleClass("initially-grey");
    } else {
      alert("enter a height")
    }



  });

});
