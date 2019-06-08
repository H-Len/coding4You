//backend logic

var teaTimeInput = parseInt($(".teaTime").val());
var valuableInput = parseInt($(".valuable").val());
var weekendInput = parseInt($(".weekend").val());
var garbageInput = parseInt($(".garbage").val());
var arguementInput = parseInt($(".arguement").val());

var inputResult = teaTimeInput + valuableInput + weekendInput + garbageInput + arguementInput;

console.log(inputResult);


//frontend logic

$(function() {

  $(form#codePicker).submit(function(event) {


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
