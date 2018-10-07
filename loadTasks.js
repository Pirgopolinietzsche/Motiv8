var config = {
    apiKey: "AIzaSyCT_YPaoJrDhHakq7DacUsGJEwXMUimktU",
    authDomain: "motiv8-27fda.firebaseapp.com",
    databaseURL: "https://motiv8-27fda.firebaseio.com",
    projectId: "motiv8-27fda",
    storageBucket: "motiv8-27fda.appspot.com",
    messagingSenderId: "42771272863"
};
firebase.initializeApp(config);

// Get a database reference to our posts
var ref = firebase.database().ref("tasks")

ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  var tasks = snapshot.val();
  var displayList = document.getElementById("list");
  snapshot.forEach(function (listOut){
    var li = document.createElement('li');
    var taskComplete = document.createElement("BUTTON");
    var item = listOut.val();
    taskComplete.innerHTML = "Mark complete";
    li.innerHTML = "Name: " + item.name + ",  Amount: " + item.amount ;

    displayList.appendChild(li);
    displayList.appendChild(taskComplete);
    displayList.appendChild(document.createElement("br"));
    displayList.appendChild(document.createElement("br"));
  });
  
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
