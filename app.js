window.onload = function() {
  $("#start").on("click", timeTil.start);
  $("#theresults").hide();
  $('#qs').hide();
  $("#done").hide();
};

var timeoutId;
var clockRunning = false;
var unanswered = 5;
var timeTil = {

  time: 60, 

  start: function() {
    $('#qs').show();
    $('#done').show();
    $('#start').hide();
    
    // DONE: Use setInterval to start the count here and set the clock to running.
        if (clockRunning == false) {

          timeoutId = setTimeout(timeTil.count, 1000);
          clockRunning = true;
        }
        

      $("#done").on("click", timeTil.done);
      
  },


  // if id selected is equal to #correctradioquestion1 then correct goes up by 1. same thing for x y z. 
  //else (not equal to #correctradioquestion1 then)  incorrect goes up by 1.

 done: function() {
   $('#qs').hide();
   $('#theresults').show();
      
  },
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    timeTil.time--;

  
    if (timeTil.time != 0){
      timeoutId = setTimeout(timeTil.count, 1000);
    }
    else if (timeTil.time == 0) {
          $("#qs").hide();
          $("#done").hide();
          $("#theresults").show();
    }

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = timeTil.timeConverter(timeTil.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#countdown").html(converted);
  },
   timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};




var correct = 0;
var wrong = 0;



$(".right1").click(function(){
correct++;
document.querySelector("#correct-answers").innerHTML = correct;
});

$(".right2").click(function(){
correct++;
document.querySelector("#correct-answers").innerHTML = correct;
});

$(".right3").click(function(){
correct++;
document.querySelector("#correct-answers").innerHTML = correct;
});

$(".right4").click(function(){
correct++;
document.querySelector("#correct-answers").innerHTML = correct;
});


$(".wrong1").click(function(){
wrong++;
document.querySelector("#incorrect-answers").innerHTML = wrong;
});
$(".wrong2").click(function(){
wrong++;
document.querySelector("#incorrect-answers").innerHTML = wrong;
});
$(".wrong3").click(function(){
wrong++;
document.querySelector("#incorrect-answers").innerHTML = wrong;
});
$(".wrong4").click(function(){
wrong++;
document.querySelector("#incorrect-answers").innerHTML = wrong;
});
$(".wrong5").click(function(){
wrong++;
document.querySelector("#incorrect-answers").innerHTML = wrong;
});


