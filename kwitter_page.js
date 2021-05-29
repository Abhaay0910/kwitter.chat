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
    function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value=" ";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['message'];
like=message_data['like'];
message=message_data['message'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 ='message_h4'>" + message +"</h4>"
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_width_tag="<span class='glyphicon glyphicon-thumbs-up'> like:"+like+"</span></button><hr>"
row=name_with_tag+message_with_tag+like_button+span_width_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } }); }); }
      
getData();
function updateLike(message_id) {
      console.log("clicked on like button- "+ message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_Like=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}