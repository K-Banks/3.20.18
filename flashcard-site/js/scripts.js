$(document).ready(function() {

  var arrayTerm = ['JavaScript', 'Operators', 'Variables', "Functions", "methods"];

  var arrayDefinition = ['definition 1', 'definition 2', 'definition 3', 'definition 4', 'definition 5'];

  function newCard() {
    var arrayGen = Math.floor(Math.random() *  4);
    var newTerm = arrayTerm[arrayGen];
    var newDefinition = arrayDefinition[arrayGen];

    $('.panel-title').fadeOut(200, function() {
      $(this).html(newTerm).fadeIn(200);
      $("panel-body").addClass("hide");
    });

    $('.panel-body').fadeOut(200, function() {
      $(this).html(newDefinition);
    });
  }

  $('.panel-title').click(function() {
    $('.panel-body').removeClass("hide");
    $(".panel-body").addClass("show");
    $('button').removeClass("hide");
  });

    $("button").click(function() {
      newCard();
      $('.panel-body').removeClass("show");
      $(".panel-body").addClass("hide");
      $('button').addClass("hide");
    });
});
