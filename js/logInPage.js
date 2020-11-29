// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDdpubWS59J5fxzO-goNrmSBFni5U5-LhA",
    databaseURL: "https://airlineswebsite-bcbe8.firebaseio.com",
    authDomain: "airlineswebsite-bcbe8.firebaseapp.com",
    // Initialize Firebase
    projectId: "airlineswebsite-bcbe8",
    storageBucket: "airlineswebsite-bcbe8.appspot.com",
    messagingSenderId: "528135116162",
    appId: "1:528135116162:web:4ccee1b30567023a662b9b",
    measurementId: "G-RGKTM6TSJJ"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

logInNow=()=>{
    user_email = document.getElementById("email").value
    user_pwd = document.getElementById("pwd").value
    firebase.auth().signInWithEmailAndPassword(user_email, user_pwd).then(function(resp) {
        console.log(resp);
        window.location.assign("mainPage.html");
        alert("LogIn Successfully");
    }).catch(function(err) {
        console.log(err);
        console.log(err.message);
        alert(err.message);
    })    
}