

const constraints = {
    video: {
      width: {
        min: 1280,
        ideal: 1920,
        max: 2560,
        facingMode: { 
            exact: 'environment'
          }
      },
      height: {
        min: 720,
        ideal: 1080,
        max: 1440
      },
    }
  };

  const firebaseConfig = {
    apiKey: "AIzaSyCTSucw5I6S1wFX4y6kaBPEE_zSydq9fl4",
    authDomain: "bbcs-51698.firebaseapp.com",
    databaseURL: "https://bbcs-51698.firebaseio.com",
    projectId: "bbcs-51698",
    storageBucket: "bbcs-51698.appspot.com",
    messagingSenderId: "817261029907",
    appId: "1:817261029907:web:9ac931061a5d7025daade6",
    measurementId: "G-NQ0KQRYZR5"
  };

  var har = -1;
  var days = -1;

firebase.initializeApp(firebaseConfig);
var db = firebase.database();

    var video = document.querySelector("#videoElement");

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(constraints, { video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (err0r) {
          console.log("Something went wrong!");
        });
    }

    window.onload = function(){
        firebase.database().ref('IUM').set({
            harvest: -1,
            days: -1
          });
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }

    var getharvest = db.ref("IUM/harvest");
    getharvest.on('value', function(snapshot){
        har=snapshot.val()
        if (har < 0){
            document.getElementById("harvest").innerHTML="-";
        }
        else{
            document.getElementById("harvest").innerHTML=String(har)+"%";
        }
    })

    var getday = db.ref("IUM/days");
    getday.on('value', function(snapshot){
        days=snapshot.val()
        if (days < 0){
            document.getElementById("days").innerHTML="-";
        }
        else{
            document.getElementById("days").innerHTML=String(days)+" days";
        }
    })


    
