$(function() {

  $("#codePicker").submit(function(event) {

    var teaTimeInput = parseInt($(".teaTime").val());
    var valuableInput = parseInt($(".valuable").val());
    var weekendInput = parseInt($(".weekend").val());
    var garbageInput = parseInt($(".garbage").val());
    var arguementInput = parseInt($(".arguement").val());

    var inputResult = teaTimeInput + valuableInput + weekendInput + garbageInput + arguementInput;

    console.log(inputResult);

    if (inputResult < 6) {
      console.log("swift");
    } else if(inputResult < 11) {
      //rust
    } else if(inputResult < 16) {
      //ruby
    } else {
      //go
    }


    $(".result").text();

    event.preventDefault();

  });
});
