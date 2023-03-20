const firebaseConfig = {
      apiKey: "AIzaSyCaA7ekRm8UN7s-PssiwTjhGGdpbdXC5eU", authDomain: "pratice-8d007.firebaseapp.com", databaseURL: "https://pratice-8d007-default-rtdb.firebaseio.com", projectId: "pratice-8d007", storageBucket: "pratice-8d007.appspot.com", messagingSenderId: "885111110576", appId: "1:885111110576:web:9970b25da117f0bf9ff475", measurementId: "G-JCL0ES30T0"
  };

firebase.initializeApp(firebaseConfig);
User_name = localStorage.getItem("user_name");
document.getElementById("Username").innerHTML = "Welcome " + User_name + "!";

room_name = localStorage.getItem("room");

user_name = localStorage.getItem("user_name");

function Addroom() {
      room_name = document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
            Purpose: "addding_room_name"
      });
      localStorage.setItem("room", room_name);
      window.location = "chatting_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> # " + Room_names + " </div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room", room_name);
      window.location = "chatting_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room");
      window.location = "index.html";
}