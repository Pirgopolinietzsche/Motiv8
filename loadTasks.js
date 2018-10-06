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
  var i = 0;
  var displayList = document.getElementById("list");
  snapshot.forEach(function (listOut){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(listOut));
    displayList.appendChild(li);
    i++;
  });
  /*var name = tasks;
  var displayList = document.getElementById("list");
  for (var i = 0; i < tasks.length; i++) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(tasks[i]));
      displayList.appendChild(li);
  }*/
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});