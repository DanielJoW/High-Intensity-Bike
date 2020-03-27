var time = 0;
var minuteCount = 0;

function startWorkOut(){
  var element = document.getElementById("startWorkOut");
      element.classList.add("hide");
  var element = document.getElementById("startWorkOut");
      element.classList.add("hide");
  var element = document.getElementById("counter");
      element.classList.add("inprogress");
  document.getElementById("counter").innerHTML = "BEGIN";
  var audio = new Audio('tone.wav');
  audio.play();

// Counter Logic

  setInterval(function(){
  time +=1 ;
  if (time <= 59){
  document.getElementById("counter").innerHTML = time + "\"";
  }
  if (time % 60 === 0){
  minuteCount = Math.round(time/60);
  }
  if (time >= 60){
    document.getElementById("counter").innerHTML = minuteCount + "\'" + (time - (60*minuteCount)) + "\"";
  }
  if (time >= 1500){
    document.getElementById("counter").innerHTML = "WORKOUT COMPLETE";
    var element = document.getElementById("counter");
        element.classList.add("finished");
    var element = document.getElementById("cooldown");
        element.classList.add("finished");
    var element = document.getElementById("cooldown1");
        element.classList.add("finished");
  }

// Section Completion

  if (time <= 180){
    var element = document.getElementById("warmup1");
        element.classList.add("inprogress");
  }

  if (time === 180){
    var element = document.getElementById("warmup1");
        element.classList.add("finished");
    var element = document.getElementById("warmup");
        element.classList.add("finished");
    var element = document.getElementById("interval1");
        element.classList.add("inprogress");
    var audio = new Audio('tone.wav');
    audio.play();
    }

    if (time === 300){
      var element = document.getElementById("interval1");
          element.classList.add("finished");
      var element = document.getElementById("interval2");
          element.classList.add("inprogress");
      var audio = new Audio('tone.wav');
      audio.play();
    }

    if (time === 420){
      var element = document.getElementById("interval2");
          element.classList.add("finished");
      var element = document.getElementById("interval3");
          element.classList.add("inprogress");
      var audio = new Audio('tone.wav');
      audio.play();
    }

    if (time === 540){
      var element = document.getElementById("interval3");
          element.classList.add("finished");
      var element = document.getElementById("interval4");
          element.classList.add("inprogress");
      var audio = new Audio('tone.wav');
      audio.play();
    }

    if (time === 660){
      var element = document.getElementById("interval4");
          element.classList.add("finished");
      var element = document.getElementById("interval5");
          element.classList.add("inprogress");
      var audio = new Audio('tone.wav');
      audio.play();
    }

    if (time === 780){
      var element = document.getElementById("interval5");
          element.classList.add("finished");
      var element = document.getElementById("interval6");
          element.classList.add("inprogress");
      var audio = new Audio('tone.wav');
      audio.play();
    }

    if (time === 900){
      var element = document.getElementById("interval6");
          element.classList.add("finished");
      var element = document.getElementById("interval7");
          element.classList.add("inprogress");
      var audio = new Audio('tone.wav');
      audio.play();
    }

    if (time === 1020){
      var element = document.getElementById("interval7");
          element.classList.add("finished");
      var element = document.getElementById("interval8");
          element.classList.add("inprogress");
      var audio = new Audio('tone.wav');
      audio.play();
    }

    if (time === 1140){
      var element = document.getElementById("interval8");
          element.classList.add("finished");
      var element = document.getElementById("interval9");
          element.classList.add("inprogress");
      var audio = new Audio('tone.wav');
      audio.play();
    }

    if (time === 1260){
      var element = document.getElementById("interval9");
          element.classList.add("finished");
      var element = document.getElementById("interval10");
          element.classList.add("inprogress");
      var audio = new Audio('tone.wav');
      audio.play();
    }

    if (time === 1380){
      var element = document.getElementById("interval10");
          element.classList.add("finished");
      var element = document.getElementById("intervals");
          element.classList.add("finished");
      var element = document.getElementById("cooldown1");
          element.classList.add("inprogress");
      var audio = new Audio('tone.wav');
      audio.play();
    }

    if (time === 1500){
      var audio = new Audio('end.wav');
      audio.play();
    }

},1000);

}
