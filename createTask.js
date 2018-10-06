// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"
var config = {
    apiKey: "AIzaSyCT_YPaoJrDhHakq7DacUsGJEwXMUimktU",
    authDomain: "motiv8-27fda.firebaseapp.com",
    databaseURL: "https://motiv8-27fda.firebaseio.com",
    projectId: "motiv8-27fda",
    storageBucket: "motiv8-27fda.appspot.com",
    messagingSenderId: "42771272863"
};
firebase.initializeApp(config);


// Reference to the recommendations object in your Firebase database
var tasks = firebase.database().ref("tasks");

// Save a new recommendation to the database, using the input in the form
var submitTask = function () {

  // Get input values from each of the form elements
  var amount = $("#amount").val();
  var due = $("#date").val();
  var name = $("#name").val();

  // Push a new recommendation to the database using those values
  tasks.push({
    "amount": amount,
    "due": date,
    "name": name
  });
};

// When the window is fully loaded, call this function.
// Note: because we are attaching an event listener to a particular HTML element
// in this function, we can't do that until the HTML element in question has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#submitTask").submit(submitTask);

});
