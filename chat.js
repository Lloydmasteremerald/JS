const firebaseConfig = {
    apiKey: "AIzaSyCaA7ekRm8UN7s-PssiwTjhGGdpbdXC5eU", authDomain: "pratice-8d007.firebaseapp.com", databaseURL: "https://pratice-8d007-default-rtdb.firebaseio.com", projectId: "pratice-8d007", storageBucket: "pratice-8d007.appspot.com", messagingSenderId: "885111110576", appId: "1:885111110576:web:9970b25da117f0bf9ff475", measurementId: "G-JCL0ES30T0"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



