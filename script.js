var config = {
    apiKey: "AIzaSyCT_YPaoJrDhHakq7DacUsGJEwXMUimktU",
    authDomain: "motiv8-27fda.firebaseapp.com",
    databaseURL: "https://motiv8-27fda.firebaseio.com",
    projectId: "motiv8-27fda",
    storageBucket: "motiv8-27fda.appspot.com",
    messagingSenderId: "42771272863"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("login-div").style.display="none";
    document.getElementById("logout-div").style.display="block";
  } else {
    // No user is signed in.
    document.getElementById("login-div").style.display="block";
    document.getElementById("logout-div").style.display="none";
  }
});

function login(){
    var email=document.getElementById("username").value;
    var pass=document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("asd");
        // ...
    });

    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            window.location = 'paypalButton.html'; //After successful login, user will be redirected to home.html
        }
    });
}

function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });
}