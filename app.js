window.onload = function() {
  $("#start").on("click", timeTil.start);
};

var timeoutId;
var timeTil = {

  time: 60, 

  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
        timeoutId = setTimeout(timeTil.count, 1000);
      
  },
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    timeTil.time--;

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

