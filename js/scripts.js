//backend logic

var inputResult = teaTimeInput + valuableInput + weekendInput + garbageInput + arguementInput;



//frontend logic

$(function() {

  var teaTimeInput = parseInt($(".teaTime").val());
  var valuableInput = parseInt($(".valuable").val());
  var weekendInput = parseInt($(".weekend").val());
  var garbageInput = parseInt($(".garbage").val());
  var arguementInput = parseInt($(".arguement").val());

  $(form#codePicker).submit(function(event) {

    console.log(inputResult);

    if (inputResult < 5) {
      //swift
    } else if(inputResult < 8) {
      //rust
    } else if(inputResult < 12) {
      //ruby
    } else {
      //go
    }


    //$(".result").text();

    event.preventDefault();
  });
});
