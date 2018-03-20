$(document).ready(function() {

  var arrayTerm = ['JavaScript', 'Operators', 'Variables', 'Functions', 'Methods', 'Arguments', 'Parameters', 'Return', 'Chaining Methods', 'String', 'Booleans', 'Undefined', 'NaN', 'Escape', 'Alert', 'Comments', 'jQuery', 'Attributes'];

  var arrayDefinition = [
    'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.',
    'JavaScript operators are used to assign values, compare values, perform arithmetic operations, and more.',
    'A variable is a value that can change, depending on conditions or on information passed to the program.',
    'A named section of a program that performs a specific task.',
    'A procedure associated with an object class.',
    'A value that is passed between programs, subroutines or functions.',
    'A special kind of variable, used in a subroutine to refer to one of the pieces of data provided as input to the subroutine.',
    'A return statement causes execution to leave the current subroutine and resume at the point in the code immediately after where the subroutine was called, known as its return address.',
    'Also known as named parameter idiom, is a common syntax for invoking multiple method calls in object-oriented programming languages. Each method returns an object, allowing the calls to be chained together in a single statement without requiring variables to store the intermediate results.',
    'A string is any finite sequence of characters ie. letters numerals symbols and punctuation marks.',
    'A data type, having two values (usually denoted true and false), intended to represent the truth values of logic and Boolean algebra.',
    'A condition where an expression does not have a correct value, although it is syntactically correct.',
    'Stands for not a number, is a numeric data type value representing an undefined or unrepresentable value, especially in floating-point calculations.',
    'Escape characters are part of the syntax for many programming languages, data formats, and communication protocols. ... An escape character may not have its own meaning, so all escape sequences are of two or more characters. There are usually two functions of escape sequences.',
    'Creates a pop-up alert with no input.', 'A comment is a programmer-readable explanation or annotation in the source code of a computer program.',
    'jQuery is a concise and fast JavaScript library that can be used to simplify event handling, HTML document traversing, Ajax interactions and animation for speedy website development. jQuery simplifies the HTMLs client-side scripting, thus simplifying Web 2.0 applications development.',
    'In computing, an attribute is a specification that defines a property of an object, element, or file. It may also refer to or set the specific value for a given instance of such. For clarity, attributes should more correctly be considered metadata.'
  ];

  function newCard() {
    var arrayGen = Math.floor(Math.random() *  17);
    var newTerm = arrayTerm[arrayGen];
    var newDefinition = arrayDefinition[arrayGen];

    $('.panel-title').fadeOut(200, function() {
      $(this).html(newTerm).fadeIn(200);
      $('panel-body').addClass('hide');
    });

    $('.panel-body').fadeOut(200, function() {
      $(this).html(newDefinition);
    });
  }

  $('.panel-title').click(function() {
    $('.panel-body').removeClass('hide');
    $('.panel-body').addClass('show');
    $('button').removeClass('hide');
  });

    $('button').click(function() {
      newCard();
      $('.panel-body').removeClass('show');
      $('.panel-body').addClass('hide');
      $('button').addClass('hide');
    });
});
