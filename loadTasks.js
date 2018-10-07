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
    var item = listOut.val();
    var date2 = item.dueDate;
    if (item.dueDate != null && item.dueDate.length == 10) {
      date2 = item.dueDate.substring(5,7) + "-" + item.dueDate.substring(8,10) + "-" + item.dueDate.substring(0,4);
    }
    li.innerHTML = item.name + ". Due: " + date2 + "\t.\t.\t.\t$" + item.amount + " at stake";
    li.style.fontFamily="Trebuchet MS"
    li.style.color = "white";
    displayList.appendChild(li);
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
