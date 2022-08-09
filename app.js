// var secondHand = document.querySelector('.sec-pin');
// var minsHand = document.querySelector('.min-pin');
// var hourHand = document.querySelector('.hr-pin');

// function setDate() {
//     var now = new Date();
  
//     var seconds = now.getSeconds();   // second pin rotation
//     var secondsDegrees = ((seconds / 60) * 360) + 90;   
//     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
//     var mins = now.getMinutes();    // minutes pin rotation
//     var minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;  
//     minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  
//     var hour = now.getHours();     // Hours pin rotation
//     var hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;   
//     hourHand.style.transform = `rotate(${hourDegrees}deg)`;
//   }

//   setInterval(setDate, 1000);

// setDate();













var dateInfo = new Date();
var hr = dateInfo.getHours() > 12 ? dateInfo.getHours() - 12 : dateInfo.getHours(),
  min = dateInfo.getMinutes(),
  sec = dateInfo.getSeconds();
  milsec = dateInfo.getMilliseconds();

  var hrAngle = hr * 30 + (min * 6 / 12),
    minAngle = min * 6 + (sec * 6 / 60),
    secAngle = sec * 6 + (milsec * 0.36 / 1000);


    function setAngle(wrapper, angle) {
        document.querySelector("." + wrapper).style.transform = "rotate(" + angle + "deg)";
      }  
      setAngle("hr-wrapper", hrAngle);
      setAngle("min-wrapper", minAngle);
      setAngle("sec-wrapper", secAngle);
