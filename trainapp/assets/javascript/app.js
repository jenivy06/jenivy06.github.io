$(document).ready(function() {
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyBtK9KhMUBki_vOvUfPi3GwWSamDNNB06Q",
  authDomain: "train-schedule-e1e23.firebaseapp.com",
  databaseURL: "https://train-schedule-e1e23.firebaseio.com",
  projectId: "train-schedule-e1e23",
  storageBucket: "train-schedule-e1e23.appspot.com",
  messagingSenderId: "568665931154"
};
firebase.initializeApp(config);

  // Create a variable to reference the database
  var database = firebase.database();
});