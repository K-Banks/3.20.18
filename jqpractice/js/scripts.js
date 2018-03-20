$(document).ready(function() {

  $("h1").click(function() {
    $("h2").slideToggle("slow");
  });

  $("p").click(function() {
    $("h1").fadeToggle("fast");
  });

  $("button").click(function() {
    $("img").toggle();
  });
});
