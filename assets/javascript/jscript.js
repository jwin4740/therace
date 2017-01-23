



var c = "";

var days = 74;
var hours = 1;
var minutes = 1;
var seconds = 10;


var raceTime = "April 8th 2017 at 8am";




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBTaP-0LgIFFa2gWd6hlKCr8cHEdoVK-2I",
    authDomain: "therace-ec187.firebaseapp.com",
    databaseURL: "https://therace-ec187.firebaseio.com",
    storageBucket: "therace-ec187.appspot.com",
    messagingSenderId: "490377130712"
  };
  firebase.initializeApp(config);

  
  var database = firebase.database();
  database.ref("/countdown").set({
    days: 74,
    hours: 24,
    minutes: 60,
    seconds: 60

  });


// var a = moment();
// var b = moment([2017, 3, 8]);
// console.log(b); // format is year, month, day
// c = b.diff(a, 'seconds')
// console.log(c);

// 74 days
// if (c > day) // days
// {
//     do {
//         c = c - day;
//         days++;
//     }
//     while (c > day);
//     console.log("days " + days);
//   console.log(c);
// }



// if (c > hour) //hours
// {

//     do {
//         c = c - hour;
//         hours++;
//     }
//     while (c > day);
//     console.log("hours: " + hours);
//       console.log(c);


// }


// if (c > minute) //minutes
// {
//     do {
//         c = c - minute;
//         minutes++;
//     }
//     while (c > day);
//     console.log("minutes: " + minutes);

// }

// if (c > seconds) //seconds
// {
//     do {
//         c = c - second;
//         seconds++;
//     }
//     while (c > day);
//     console.log("minutes: " + seconds);

// }
$("#days").html(days + "days ");
$("#hours").html(hours + "hr ");
$("#minutes").html(minutes + "min ");
$("#seconds").html(seconds + "sec ");

function decreaseSeconds() {

    seconds--;
    $("#seconds").html(seconds + "sec ");
    if (seconds === 0) {
        seconds = 60;
        minutes--;
        $("#minutes").html(minutes + "min ");
        if (minutes === 0) {
            minutes = 60;
            $("#minutes").html(minutes + "min ");
            hours--;
            $("#hours").html(hours + "hr ");
            if (hours === 0) {
                hours = 24;
                $("#hours").html(hours + "hr ");
                days--;
                $("#days").html(days + "days ");

            }
        }

    }
}

setInterval(decreaseSeconds, 1000);
