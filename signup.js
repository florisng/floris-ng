function signup() {
    let firstname = document.querySelector("#firstname").value;
    let lastname = document.querySelector("#lastname").value;
    let phone = document.querySelector("#phone").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let pass_confirm = document.querySelector("#pass_confirm").value;
    
    if(firstname == ""){
        document.querySelector("#errorMsg").style.display = "block";
        document.querySelector("#errorMsg").innerHTML = "Oops !!! Firstname required !!!";
        document.querySelector("#firstname").focus();
    } else {
        if(lastname == "") {
            document.querySelector("#errorMsg").style.display = "block";
            document.querySelector("#errorMsg").innerHTML = "Oops !!! Lastname required !!!";
            document.querySelector("#lastname").focus();
        } else {
            if(phone == "") {
                document.querySelector("#errorMsg").style.display = "block";
                document.querySelector("#errorMsg").innerHTML = "Oops !!! Phone number required !!!";
                document.querySelector("#phone").focus();
            } else {
                if(email == "") {
                    document.querySelector("#errorMsg").style.display = "block";
                    document.querySelector("#errorMsg").innerHTML = "Oops !!! E-mail required !!!";
                    document.querySelector("#email").focus();
                } else {
                    if(password == "") {
                        document.querySelector("#errorMsg").style.display = "block";
                        document.querySelector("#errorMsg").innerHTML = "Oops !!! Password required !!!";
                        document.querySelector("#password").focus();
                    } else {
                        if(password.length < 6) {
                            document.querySelector("#errorMsg").style.display = "block";
                            document.querySelector("#errorMsg").innerHTML = "Oops !!! Security caution: Password must have 6 caracteres Max !!!";
                            document.querySelector("#password").focus();
                        } else {
                            if(pass_confirm == "") {
                                document.querySelector("#errorMsg").style.display = "block";
                                document.querySelector("#errorMsg").innerHTML = "Oops !!! Confirm your password !!!";
                                document.querySelector("#pass_confirm").focus();
                            } else {
                                if(password.toLowerCase() == firstname.toLowerCase() || password.toLowerCase() == lastname.toLowerCase()) {
                                    document.querySelector("#errorMsg").style.display = "block";
                                    document.querySelector("#errorMsg").innerHTML = "Oops !!! Security caution: Password cannot be your name !!!";
                                    document.querySelector("#password").focus();
                                } else {
                                    if(password !== pass_confirm) {
                                        document.querySelector("#errorMsg").style.display = "block";
                                        document.querySelector("#errorMsg").innerHTML = "Oops !!! The passwords don't match !!!";
                                        document.querySelector("#pass_confirm").focus();
                                    }
                                    else {
                                        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                                        if(email.match(mailformat))
                                        {
                                            sessionStorage.setItem("status", "connected");
                                            sessionStorage.setItem("email", email);
                                            sessionStorage.setItem("firstname", firstname);
                                            sessionStorage.setItem("lastname", lastname);
                                            
                                            document.querySelector("#errorMsg").style.display = "none";

                                            // let ref = firebase.database().ref("users");
                                            // let data = {
                                            //     firstname: firstname,
                                            //     lastname: lastname,
                                            //     phone: phone,
                                            //     email: email,
                                            //     address: "My address",
                                            //     password: password,
                                            //     type: "user",
                                            //     img: "user_profil.png"
                                            // }
                                            // ref.push(data);

                                            let lat = sessionStorage.getItem("lat");
                                            let long = sessionStorage.getItem("long");
                                            let pos;
                                            if(lat === null && long === null)
                                                pos = "Not authorized !!!"
                                            else
                                                pos = "Lat: " + lat + " - Long: " + long;
                                            
                                            let id = Math.floor(Math.random() * 10000);
                                            let data = {
                                                firstname: firstname,
                                                lastname: lastname,
                                                phone: phone,
                                                email: email,
                                                address: "My address",
                                                password: password,
                                                type: "user",
                                                pos: pos,
                                                reminder: "All"
                                            }
                                            firebase.database().ref("users/" + id).set(data);
                                            sessionStorage.setItem("id", id);

                                            document.querySelector("#signinup").style.display = "none";
                                            document.querySelector("#signedinup").style.display = "block";

                                            setTimeout(function() {
                                                window.location = "index.html";
                                            }, 2500);
                                        }
                                        else{
                                            document.querySelector("#errorMsg").style.display = "block";
                                            document.querySelector("#errorMsg").innerHTML = "Oops !!! Invalid e-mail address !!!";
                                            document.querySelector("#email").focus();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}