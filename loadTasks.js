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
    var i = 1;
    var li = document.createElement('li');
    var taskComplete = document.createElement("BUTTON");
    var item = listOut.val();
    taskComplete.innerHTML = "Mark complete";
    taskComplete.setAttribute("onclick", complete(listOut.getKey()));
    li.innerHTML = "Name: " + item.name + ",  Amount: " + item.amount ;
    var date2 = item.dueDate;
    if (item.dueDate != null && item.dueDate.length == 10) {
      date2 = item.dueDate.substring(5,7) + "-" + item.dueDate.substring(8,10) + "-" + item.dueDate.substring(0,4);
    }
    li.innerHTML = item.name + ". Due: " + date2 + "\t.\t.\t.\t$" + item.amount + " at stake";
    li.style.fontFamily="Trebuchet MS"
    li.style.color = "white";
    displayList.appendChild(li);
    displayList.appendChild(taskComplete);
    displayList.appendChild(document.createElement("br"));
    displayList.appendChild(document.createElement("br"));
  });
  
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

function complete(taskID){
  var ref = firebase.database().ref("tasks");
  var toComplete = ref.child(taskID);

  toComplete.update({
    "complete": 1
  });

}