// Get user ID
			let id = sessionStorage.getItem("user_id");
			// Save the name
			function saveName() {
                let firstname = document.querySelector("#firstname").value;
                if(firstname == "") {
                    document.querySelector("#errorMsg").style.display = "block";
                    document.querySelector("#errorMsg").innerHTML = "Oops !!! Firstname required !!!<hr>";
                }
                else {
                    let lastname = document.querySelector("#lastname").value;
                    if(lastname == "") {
                        document.querySelector("#errorMsg").style.display = "block";
                        document.querySelector("#errorMsg").innerHTML = "Oops !!! Lastname required !!!<hr>";
                    }
                    else {
								// Retrieve user information
											let saved_phone = null;
											let saved_email = null;
											let saved_address = null;
											let saved_password = null;
											let saved_type = null;
											let saved_pos = null;
											let saved_reminder = null;
								let ref = firebase.database().ref("users");
								ref.on("value", function gotData(data) {
									let d = data.val();
									let keys = Object.keys(d);
									let i = 0;
									let found = false;
									while(i < keys.length && found === false) {
										let k = keys[i];
										let saved_id = k;
										if(saved_id == id) {
											found = true;
											saved_phone = d[k].phone;
											saved_email = d[k].email;
											saved_address = d[k].address;
											saved_password = d[k].password;
											saved_pos = d[k].pos;
											saved_reminder = d[k].remider;
										}
										i++;
									}
								});
								
				let firstname = document.querySelector("#firstname").value;
				let lastname = document.querySelector("#lastname").value;

							let data = {
								firstname: firstname,
								lastname: lastname,
								phone: saved_phone,
								email: saved_email,
								address: saved_address,
								password: saved_password,
								type: saved_type,
								pos: saved_pos,
								reminder: saved_reminder
							}
                            firebase.database().ref('users/' + id).set(data);
                            
                            reflesh_page();
                        }
                    }
			}

			// Save the email
            function saveEmail()
            {
                let email = document.querySelector("#email").value;
                if(email == "") {
                    document.querySelector("#errorMsg").style.display = "block";
                    document.querySelector("#errorMsg").innerHTML = "Oops !!! E-mail required !!!<hr>";
                }
                else {
                    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if(email.match(mailformat))
                    {
								// Retrieve user information
											let saved_firstname = null;
											let saved_lastname = null;
											let saved_phone = null;
											let saved_address = null;
											let saved_password = null;
											let saved_type = null;
											let saved_pos = null;
											let saved_reminder = null;
								let ref = firebase.database().ref("users");
								ref.on("value", function gotData(data) {
									let d = data.val();
									let keys = Object.keys(d);
									let i = 0;
									let found = false;
									while(i < keys.length && found === false) {
										let k = keys[i];
										let saved_id = k;
										if(saved_id == id) {
											found = true;
											saved_firstname = d[k].firstname;
											saved_lastname = d[k].lastname;
											saved_phone = d[k].phone;
											saved_address = d[k].address;
											saved_password = d[k].password;
											saved_pos = d[k].pos;
											saved_reminder = d[k].reminder;
										}
										i++;
									}
								});
								
				let email = document.querySelector("#email").value;

							let data = {
								firstname: saved_firstname,
								lastname: saved_lastname,
								phone: saved_phone,
								email: email,
								address: saved_address,
								password: saved_password,
								type: saved_type,
								pos: saved_pos,
								reminder: saved_reminder
							}
                            firebase.database().ref('users/' + id).set(data);
                            sessionStorage.setItem("email", email);
                            reflesh_page();
                    }
                    else {
                        document.querySelector("#errorMsg").style.display = "block";
                        document.querySelector("#errorMsg").innerHTML = "Oops !!! Invalid e-mail address !!!<hr>";
                    }
                }
			}

			// Save the phone
			function savePhone() {
                let phone = document.querySelector("#phone").value;
                if(phone == "") {
                    document.querySelector("#errorMsg").style.display = "block";
                    document.querySelector("#errorMsg").innerHTML = "Oops !!! Phone number required !!!<hr>";
                }
                else {
								// Retrieve user information
											let saved_firstname = null;
											let saved_lastname = null;
											let saved_email = null;
											let saved_address = null;
											let saved_password = null;
											let saved_type = null;
											let saved_pos = null;
											let saved_reminder = null;
								let ref = firebase.database().ref("users");
								ref.on("value", function gotData(data) {
									let d = data.val();
									let keys = Object.keys(d);
									let i = 0;
									let found = false;
									while(i < keys.length && found === false) {
										let k = keys[i];
										let saved_id = k;
										if(saved_id == id) {
											found = true;
											saved_firstname = d[k].firstname;
											saved_lastname = d[k].lastname;
											saved_email = d[k].email;
											saved_address = d[k].address;
											saved_password = d[k].password;
											saved_type = d[k].type;
											saved_pos = d[k].pos;
											saved_reminder = d[k].reminder;
										}
										i++;
									}
								});
								
				let phone = document.querySelector("#phone").value;

							let data = {
								firstname: saved_firstname,
								lastname: saved_lastname,
								phone: phone,
								email: saved_email,
								address: saved_address,
								password: saved_password,
								type: saved_type,
								pos: saved_pos,
								reminder: saved_reminder
							}
                            firebase.database().ref('users/' + id).set(data);
                            
                            reflesh_page();
                }
			}

			// Save the address
			function saveAdd() {
                let add = document.querySelector("#add").value;
                if(add == "") {
                    document.querySelector("#errorMsg").style.display = "block";
                    document.querySelector("#errorMsg").innerHTML = "Oops !!! Address required !!!<hr>";
                }
                else {
								// Retrieve user information
											let saved_firstname = null;
											let saved_lastname = null;
											let saved_phone = null;
											let saved_email = null;
											let saved_password = null;
											let saved_type = null;
											let saved_pos = null;
											let saved_reminder = null;
								let ref = firebase.database().ref("users");
								ref.on("value", function gotData(data) {
									let d = data.val();
									let keys = Object.keys(d);
									let i = 0;
									let found = false;
									while(i < keys.length && found === false) {
										let k = keys[i];
										let saved_id = k;
										if(saved_id == id) {
											found = true;
											saved_firstname = d[k].firstname;
											saved_lastname = d[k].lastname;
											saved_phone = d[k].phone;
											saved_email = d[k].email;
											saved_password = d[k].password;
											saved_type = d[k].type;
											saved_pos = d[k].pos;
											saved_reminder = d[k].reminder;
										}
										i++;
									}
								});
								
				let add = document.querySelector("#add").value;

							let data = {
								firstname: saved_firstname,
								lastname: saved_lastname,
								phone: saved_phone,
								email: saved_email,
								address: add,
								password: saved_password,
								type: saved_type,
								pos: saved_pos,
								reminder: saved_reminder
							}
                            firebase.database().ref('users/' + id).set(data);
                            
                            reflesh_page();
                }
			}

			// Save the address
			function savePass() {
                let pass = document.querySelector("#pass").value;
                let confirm_pass = document.querySelector("#confirm_pass").value;
                if(pass === "") {
                    document.querySelector("#errorMsg").style.display = "block";
                    document.querySelector("#errorMsg").innerHTML = "Oops !!! Password required !!!<hr>";
                }
                else {
                    if(pass.length < 6) {
                        document.querySelector("#errorMsg").style.display = "block";
                        document.querySelector("#errorMsg").innerHTML = "Oops !!! Security caution: Password must have 6 caracteres Max !!!<hr>";
                    }
                    else{
                        if(confirm_pass === "") {
                            document.querySelector("#errorMsg").style.display = "block";
                            document.querySelector("#errorMsg").innerHTML = "Oops !!! Confirm password !!!<hr>";
                        }
                        else{
                            if(pass !== confirm_pass) {
                                document.querySelector("#errorMsg").style.display = "block";
                                document.querySelector("#errorMsg").innerHTML = "Oops !!! The passwords don't match !!!<hr>";
                            }
                            else{
                                            // Close error div if it's opened
                                            document.querySelector("#errorMsg").style.display = "none";

                                            // Retrieve user information
											let saved_firstname = null;
											let saved_lastname = null;
											let saved_phone = null;
											let saved_email = null;
											let saved_address = null;
											let saved_type = null;
											let saved_pos = null;
											let saved_reminder = null;
								let ref = firebase.database().ref("users");
								ref.on("value", function gotData(data) {
									let d = data.val();
									let keys = Object.keys(d);
									let i = 0;
									let found = false;
									while(i < keys.length && found === false) {
										let k = keys[i];
										let saved_id = k;
										if(saved_id == id) {
											found = true;
											saved_firstname = d[k].firstname;
											saved_lastname = d[k].lastname;
											saved_phone = d[k].phone;
											saved_email = d[k].email;
											saved_address = d[k].address;
											saved_type = d[k].type;
											saved_pos = d[k].pos;
											saved_reminder = d[k].reminder;
										}
										i++;
									}
								});
								
                                let pass = document.querySelector("#pass").value;

                                let data = {
                                    firstname: saved_firstname,
                                    lastname: saved_lastname,
                                    phone: saved_phone,
                                    email: saved_email,
                                    address: saved_address,
                                    password: pass,
                                    type: saved_type,
                                    pos: saved_pos,
                                    reminder: saved_reminder
                                }
                                firebase.database().ref('users/' + id).set(data);
                                
                                reflesh_page();
                            }
                        }
                    }
                }
			}

			// Save the address
			function saveType() {
				// Retrieve user information
							let saved_firstname = null;
							let saved_lastname = null;
							let saved_phone = null;
							let saved_email = null;
							let saved_address = null;
							let saved_password = null;
							let saved_pos = null;
							let saved_reminder = null;
				let ref = firebase.database().ref("users");
				ref.on("value", function gotData(data) {
					let d = data.val();
					let keys = Object.keys(d);
					let i = 0;
					let found = false;
					while(i < keys.length && found === false) {
						let k = keys[i];
						let saved_id = k;
						if(saved_id == id) {
							found = true;
							saved_firstname = d[k].firstname;
							saved_lastname = d[k].lastname;
							saved_phone = d[k].phone;
							saved_email = d[k].email;
							saved_address = d[k].address;
							saved_password = d[k].password;
							saved_pos = d[k].pos;
							saved_reminder = d[k].reminder;
						}
						i++;
					}
				});
				
let type = document.querySelector("#type").value;

			let data = {
				firstname: saved_firstname,
				lastname: saved_lastname,
				phone: saved_phone,
				email: saved_email,
				address: saved_address,
				password: saved_password,
				type: type,
				pos: pos,
				reminder: reminder
			}
			firebase.database().ref('users/' + id).set(data);
			
			reflesh_page();
}
            
            // Reflesh the page
            function reflesh_page() {
                window.location = "";
            }

					document.querySelector("#file").addEventListener('change', function() {
						if (this.files && this.files[0]) {
							var img = document.querySelector('.userPro');  // $('img')[0]
							img.src = URL.createObjectURL(this.files[0]); // set src to blob url

							var img = document.querySelector('.my_profil');  // $('img')[0]
							img.src = URL.createObjectURL(this.files[0]); // set src to blob url
							document.querySelector("#pic_form").style.display = "none"
						}
					});