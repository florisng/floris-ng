function add_article() {
    let article_title = document.querySelector("#title").value;
    let article_content = document.querySelector("#content").value;
    
    if(article_title == ""){
        document.querySelector("#okMsg").style.display = "none";
        document.querySelector("#errorMsg").style.display = "block";
        document.querySelector("#errorMsg").innerHTML = "Oops !!! A title is required !!!";
        document.querySelector("#title").focus();
    } else {
        if(article_content == "") {
            document.querySelector("#okMsg").style.display = "none";
            document.querySelector("#errorMsg").style.display = "block";
            document.querySelector("#errorMsg").innerHTML = "Oops !!! The content is required !!!";
            document.querySelector("#content").focus();
        } else {
            document.querySelector("#errorMsg").style.display = "none";
            document.querySelector("#okMsg").style.display = "block";
            document.querySelector("#okMsg").innerHTML = "<img src='img/cool.png' class='small'> Article added !!!";

                                            let ref = firebase.database().ref("users");
                                            let data = {
                                                title: article_title,
                                                content: article_content,
                                                date: daterEn()
                                            }
                                            ref.push(data);
        }
    }
}