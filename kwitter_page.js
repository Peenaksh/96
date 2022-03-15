

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

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();
