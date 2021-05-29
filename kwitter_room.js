var firebaseConfig = {
    apiKey: "AIzaSyAkWn5fkQF4TgUNDtuotV4tsnDWb4z-fNQ",
    authDomain: "tic-tac-toe-11159.firebaseapp.com",
    databaseURL: "https://tic-tac-toe-11159-default-rtdb.firebaseio.com",
    projectId: "tic-tac-toe-11159",
    storageBucket: "tic-tac-toe-11159.appspot.com",
    messagingSenderId: "677698091114",
    appId: "1:677698091114:web:b2f68f742dede892ca7213",
    measurementId: "G-DL1GCLQL19"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Welcome"+ user_name+ "!";
function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingRoomName"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+room_name+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
