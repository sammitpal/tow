const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.getElementById('container');



open.addEventListener('click', () => {
    container.classList.add("active");
});

close.addEventListener('click', () => {
    container.classList.remove("active");
});
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
right = document.querySelector('.right')

burger.addEventListener('click', ()=>{
    right.classList.toggle('v-class');
    navbar.classList.toggle('hnav');
})

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("email").style.display = "none";
        document.getElementById("password").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("create").style.display = "none";
        document.getElementById("elabel").style.display = "none";
        document.getElementById("plabel").style.display = "none";
        document.getElementById("logout").style.display = "block";
        document.getElementById("wemail").style.display = "block";
        document.getElementById("popitems").style.display = "block";
        document.getElementById("google").style.display = "none";
        document.getElementById("facebook").style.display = "none";
        document.getElementById("github").style.display = "none";

        var use = firebase.auth().currentUser;

        if (use != null) {

            if (use.emailVerified) {
                document.getElementById("open").innerHTML = "User";
                document.getElementById("title").innerHTML = "Hello";
                document.getElementById("wemail").innerHTML = use.email;
            }
            else {
                document.getElementById("wemail").innerHTML = "Please Verify your Email";
            }
        }
    }
    else {
        document.getElementById("email").style.display = "block";
        document.getElementById("password").style.display = "block";
        document.getElementById("login").style.display = "block";
        document.getElementById("create").style.display = "block";
        document.getElementById("logout").style.display = "none";
        document.getElementById("wemail").style.display = "none";
        document.getElementById("popitems").style.display = "none";
        document.getElementById("google").style.display = "block";
        document.getElementById("facebook").style.display = "block";
        document.getElementById("github").style.display = "block";
        document.getElementById("title").innerHTML = "Login";

    }
});


function create() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
        window.alert('Account created successfully');
        verify();
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
    });
}
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
        window.alert('Logged in successfully');
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
    });
}

function verify() {
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function () {
        window.alert("Email sent");
    }).catch(function (error) {

    });
}

function logout() {
    firebase.auth().signOut();
}

function google(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log("success");
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}

function facebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log("success");

        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}