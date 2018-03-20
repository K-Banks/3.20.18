$(document).ready(function() {

  $("h1").click(function() {
    $("h2").slideToggle("slow");
  });

  $("p").click(function() {
    $("h1").fadeToggle("fast");
  });

  $(".button-cat").click(function() {
    $("img").toggle();
  });

  $(".button-dark").click(function(){
    $("body").toggleClass("dark");
  });

  $("p").click(function() {
    $("p").toggleClass("p-box");
  });
});
