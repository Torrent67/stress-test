$(document).ready(function(){
  $("form#stress-listed").submit(function(event){
    event.preventDefault();
    $("#stress-responses").show();

var stressTotal = 0;
var healthTotal = 0;
var reliefTotal = 0;

var finalTotal = 0;

    $("input:checkbox[name=stress-list]:checked").each(function(){
      var stressList = parseInt($(this).val());
      $('#stress-responses').append(stressList + "<br>");
      stressTotal += stressList;
    });
    $("#health-responses").show();
    $("input:checkbox[name=health-list]:checked").each(function(){
      var healthList = parseInt($(this).val());
      $('#health-responses').append(healthList + "<br>");
      healthTotal += healthList;
    });

    $("input:checkbox[name=relief-list]:checked").each(function(){
      var reliefList = parseInt($(this).val());
      $('#relief-responses').append(reliefList + "<br>");
      reliefTotal += reliefList;
    });

    finalTotal = reliefTotal + healthTotal + stressTotal;
    console.log(finalTotal);

    if (finalTotal <= 0) {
      $("#finalResult").append("<h3> You are doing great! <h3>");
    } else if (finalTotal > 0 && finalTotal <= 3) {
      $("#finalResult").append("<h3> Not too hot!<h3>");
    } else if (finalTotal > 3) {
      $("#finalResult").append("<h3>YOU NEED SOME MILK<h3>");
    };



    $('#stress-listed').hide();
    $('#health-listed').hide();
    $('#relief-listed').hide();
  });
});
