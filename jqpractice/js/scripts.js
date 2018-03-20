$(document).ready(function() {
  var counter = 0;

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

  $('p').click(function() {
    $("#salad").remove();
  });

  function talk () {
    $('.talk').after('<p>This is the SHIT!!</p>');
  }

  $('.talk').click(function() {
    talk();
  });

  $('#remix').click(function() {
    $('#remix').css("background-color", "black");

      setInterval(function () {
        $('#remix').removeClass();
        $('#remix').addClass('background-pink');
      }, 2000);

      setInterval(function () {
        $('#remix').removeClass();
        $('#remix').addClass('background-green');
      }, 2100);

      setInterval(function () {
        $('#remix').removeClass();
        $('#remix').addClass('background-purple');
      }, 2200);

      setInterval(function () {
        $('#remix').removeClass();
        $('#remix').addClass('background-red');
      }, 2250);

      setInterval(function () {
        $('#remix').removeClass();
        $('#remix').addClass('background-yellow');
      }, 2300);

  });

  $('#gif').click(function() {
    setInterval(function () {
      $('#gif').removeClass();
      $('#gif').addClass('img2');
    }, 200);
    setInterval(function () {
      $('#gif').removeClass();
      $('#gif').addClass('img3');
    }, 225);
    setInterval(function () {
      $('#gif').removeClass();
      $('#gif').addClass('img4');
    }, 250);
    setInterval(function () {
      $('#gif').removeClass();
      $('#gif').addClass('img5');
    }, 275);
    setInterval(function () {
      $('#gif').removeClass();
      $('#gif').addClass('img6');
    }, 300);
    setInterval(function () {
      $('#gif').removeClass();
      $('#gif').addClass('img7');
    }, 325);
    setInterval(function () {
      $('#gif').removeClass();
      $('#gif').addClass('img8');
    }, 350);
    setInterval(function () {
      $('#gif').removeClass();
      $('#gif').addClass('img9');
    }, 375);
  });

  $('#dog').click(function() {
    $(this).after('<p>BARK!</p>');
  });
});
