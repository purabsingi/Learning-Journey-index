

var firebaseConfig = {
  apiKey: "AIzaSyCSLzTFSej-LMKkC_VdAKlBW_MxgvllMCU",
  authDomain: "learning-journey-bf1f2.firebaseapp.com",
  databaseURL: "https://learning-journey-bf1f2-default-rtdb.firebaseio.com",
  projectId: "learning-journey-bf1f2",
  storageBucket: "learning-journey-bf1f2.appspot.com",
  messagingSenderId: "1041900866359",
  appId: "1:1041900866359:web:0c3bb4e054563acec1e8b2",
  measurementId: "G-6EPGC2EPTG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    function submit_guid_form()
    { 
      Username = document.getElementById("name").value;
      User_mail = document.getElementById("email").value;
      User_mobile = document.getElementById("number").value;
      user_class = document.getElementById("class").value;

      if (User_mobile.length != 10){
        console.log("enter valid")
        window.alert("*Phone number should be of 10 digits!")
        console.log(Error)
    }
    else{
      console.log(Username);
        firebase.database().ref("/").child(Username).update({
          "Username" : Username,
          "Email" : User_mail,
          "Contact Number" : User_mobile,
          "class" : user_class
                  });
                  localStorage.setItem("name", Username);
          window.alert("Thanks  " + Username + "  You will get a call in 24 hours Receive it. techinical team will Guid you")
    }
}

function event_detail(){
  window.location="comming_soon.html";
}

function learning_platform_d(){
  window.location="online_learning.html";
}

