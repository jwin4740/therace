var config = {
    apiKey: "AIzaSyBTaP-0LgIFFa2gWd6hlKCr8cHEdoVK-2I",
    authDomain: "therace-ec187.firebaseapp.com",
    databaseURL: "https://therace-ec187.firebaseio.com",
    storageBucket: "therace-ec187.appspot.com",
    messagingSenderId: "490377130712"
};
firebase.initializeApp(config);


var c = "";

var days = 74;
var hours = 1;
var minutes = 1;
var seconds = 10;


var raceTime = "April 8th 2017 at 8am";

function showTime() {
    var thetime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#realtime").html(thetime);

}

setInterval(showTime, 1000);


   
var currentTime = moment();
console.log(currentTime);

var b = moment([2017, 3, 8]).hour(8);
console.log(b);

var timeDiff = b.diff(currentTime, "seconds");
console.log(timeDiff);

 var database = firebase.database();
    database.ref("/countdown").set({
      timeTo: timeDiff
    });




// trainRef.on("value", function(snapshot) {

//     days = snapshot.val().days;
//     hours = snapshot.val().hours;
//     minutes = snapshot.val().minutes;
//     seconds = snapshot.val().seconds;
//     $("#days").html(days + "days ");
//     $("#hours").html(hours + "hr ");
//     $("#minutes").html(minutes + "min ");
//     $("#seconds").html(seconds + "sec ");
// });







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



// setInterval(pushFirebase, 10000);


