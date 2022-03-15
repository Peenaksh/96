
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyByLQ_GaU6NzckYY1LB7KE3WVMvjNoLwvw",
    authDomain: "lets-e60ff.firebaseapp.com",
    databaseURL: "https://lets-e60ff-default-rtdb.firebaseio.com",
    projectId: "lets-e60ff",
    storageBucket: "lets-e60ff.appspot.com",
    messagingSenderId: "270749372211",
    appId: "1:270749372211:web:5b034a572c93aaaeb9b846"
  };
  
  // Initialize Firebase
  firebase.initailizeApp(firebaseConfig);
  

  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;

         firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });

        localStorage.setItem("Roomname",room_name);
    
        window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
        console.log("room_name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();
function redirectToroomname(name){
  console.log(name);
  localStorage.setItem("Roomname",name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("Username");
  localStorage.removeItem("Roomname");
  window.location = "index.html";
}