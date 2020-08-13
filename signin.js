// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDzNGaESF4A8DbMKZyg1WuvmBB62x5_-To",
    authDomain: "floris-ng.firebaseapp.com",
    databaseURL: "https://floris-ng.firebaseio.com",
    projectId: "floris-ng",
    storageBucket: "floris-ng.appspot.com",
    messagingSenderId: "667336396068",
    appId: "1:667336396068:web:8398065c7ae3d8ab50f7b1",
    measurementId: "G-G1MQMC21Y7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function signIn(){
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let ref = firebase.database().ref("users");
    ref.on("value", function gotData(data) {
        let d = data.val()
        let keys = Object.keys(d);
        let i = 0;
        let found = false;
        let type = "user";
        
        while(i < keys.length && found === false) {
            let k = keys[i];
            let saved_email = d[k].email;
            let saved_password = d[k].password;
            if(saved_email === email && saved_password === password) {
                found = true;
                type = d[k].type;
            }
            i++;
        }

        if(found === false) {
            document.querySelector("#errorMsg").style.display = "block";
            document.querySelector("#errorMsg").innerHTML = "Oops !!! Invalid e-mail or password !!!";
        }
        else{
            sessionStorage.setItem("status", "connected");
            sessionStorage.setItem("email", email);
            
            let user_infos = getUserInfos(email);
            let firstname = user_infos[0];
            let lastname = user_infos[1];
            let id = user_infos[2];
            sessionStorage.setItem("firstname", firstname);
            sessionStorage.setItem("lastname", lastname);
            sessionStorage.setItem("user_id", id);
            
            if(type === "admin") {
                sessionStorage.setItem("type", "admin");
            }
            else{
                sessionStorage.setItem("type", "user");
            }
            document.querySelector("#errorMsg").style.display = "none";
            
            document.querySelector("#signinup").style.display = "none";
            document.querySelector("#signedinup").style.display = "block";
            
            setTimeout(function() {
                let page = "index.html";
                if(sessionStorage.getItem("type") === "admin") {
                    page = "admin.html"
                }
                window.location = page;
            }, 1200);
        }
    });
}

// Retrieve user infrmation
function getUserInfos(email) {
    let ref = firebase.database().ref("users");
    let user_infos = []
    ref.on("value", function gotData(data) {
        let d = data.val()
        let keys = Object.keys(d);
        let i = 0;
        let found = false;
        while(i < keys.length && found === false) {
            let k = keys[i];
            let saved_email = d[k].email;
            let saved_password = d[k].password;
            if(saved_email === email) {
                found = true;
                firstname = d[k].firstname;
                lastname = d[k].lastname;
                id = k;
                user_infos = [firstname, lastname, id]
            }
            i++;
        }
    });
    return user_infos;
}