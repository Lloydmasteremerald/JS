const firebaseConfig = {
      apiKey: "AIzaSyCaA7ekRm8UN7s-PssiwTjhGGdpbdXC5eU", authDomain: "pratice-8d007.firebaseapp.com", databaseURL: "https://pratice-8d007-default-rtdb.firebaseio.com", projectId: "pratice-8d007", storageBucket: "pratice-8d007.appspot.com", messagingSenderId: "885111110576", appId: "1:885111110576:web:9970b25da117f0bf9ff475", measurementId: "G-JCL0ES30T0"
  };


firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room");

user_name = localStorage.getItem("user_name");

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code  
                      console.log(message_data);
                      names = message_data['name'];  
                      message = message_data['message'];   
                      like = message_data['like'];
                      A1 = "<h4>" + names + "<img class='user_tick' src= 'tick.png'> </h4>";
                      A2 = "<h4 class= 'message_h4'>" + message + "</h4>";
                      A3 = "<button class='btn btn-warning'id=" + firebase_message_id + "value=" + like + "onclick= 'updateLike(this.id)'>";
                      A4 = "<span class= 'glyphicon glyphicon-thumps-up'> Like :   " + like + "</span> </button><hr>";
                      Jay = A1 + A2 + A3 + A4;
                      document.getElementById("output").innerHTML += Jay;
                      //End code
                }
          });
    });
}
getData();


function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          names: user_name,
          message: msg, 
          like: 0
    });
    document.getElementById("msg").value = "";
}