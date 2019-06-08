$(function() {

  $("#codePicker").submit(function(event) {

    event.preventDefault();

    var teaTimeInput = parseInt($(".teaTime").val());
    var valuableInput = parseInt($(".valuable").val());
    var weekendInput = parseInt($(".weekend").val());
    var garbageInput = parseInt($(".garbage").val());
    var arguementInput = parseInt($(".arguement").val());

    var inputResult = teaTimeInput + valuableInput + weekendInput + garbageInput + arguementInput;



    $(".result").text(function(){
      var name = $(".name").val();
      $(".yourName").text(name + ",");


      if (inputResult < 6) {
        $(".swift").show();
        $(".rust, .ruby, .go").hide();
      } else if (inputResult < 11) {
        $(".rust").show();
        $(".swift, .ruby, .go").hide();
      } else if (inputResult < 16) {
        $(".ruby").show();
        $(".swift, .rust, .go").hide();
      } else {
        $(".go").show();
        $(".swift, .rust, .ruby").hide();
      }

    });

  });
});
