// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDdpubWS59J5fxzO-goNrmSBFni5U5-LhA",
    authDomain: "airlineswebsite-bcbe8.firebaseapp.com",
    databaseURL: "https://airlineswebsite-bcbe8.firebaseio.com",
    projectId: "airlineswebsite-bcbe8",
    storageBucket: "airlineswebsite-bcbe8.appspot.com",
    messagingSenderId: "528135116162",
    appId: "1:528135116162:web:4ccee1b30567023a662b9b",
    measurementId: "G-RGKTM6TSJJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

registerUser=()=>{
    user_email = document.getElementById("email").value;
    user_pwd = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(user_email, user_pwd).then(function(resp) {
        console.log(resp);
        window.location.assign("mainPage.html");
        alert("User Registered Successfully");
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
        console.log(errorMessage);
        alert(errorMessage);
    });
}