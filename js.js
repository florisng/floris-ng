function daterEn() {
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let hour = d.getHours();
    let min = d.getMinutes();
    let str_date =  date + "/" + month + "/" + year + " - " + hour + ":" + min;
    return str_date;
}
function showPassword() {
    var field = document.querySelector("#password");
    if (field.type === "password") {
        field.type = "text";
    } else {
        field.type = "password";
    }
}
function open_menu() {
    document.querySelector(".close_menu_icon").style.display = "block";
    document.querySelector(".open_menu_icon").style.display = "none";
    document.querySelector(".small_menu").style.display = "block";
}
function close_menu() {
    document.querySelector(".close_menu_icon").style.display = "none";
    document.querySelector(".open_menu_icon").style.display = "block";
    document.querySelector(".small_menu").style.display = "none";
}
function open_delete_article() {
    document.querySelector(".delete_article").style.display = "block";
}
function close_delete_article() {
    document.querySelector(".delete_article").style.display = "none";
}
function open_show() {
    document.querySelector(".show").style.display = "block";
    document.querySelector(".down").style.display = "none";
    document.querySelector(".up").style.display = "block";
    document.querySelector(".home").setAttribute("onclick", "close_show()");
}
function close_show() {
    document.querySelector(".show").style.display = "none";
    document.querySelector(".up").style.display = "none";
    document.querySelector(".down").style.display = "block";
    document.querySelector(".home").setAttribute("onclick", "open_show()");
}
function open_form(one, two, three, four, five, six) {
    document.querySelector(one).style.display = "block";
    document.querySelector(two).style.display = "none";
    document.querySelector(three).style.display = "none";
    document.querySelector(four).style.display = "none";
    document.querySelector(five).style.display = "none";
    document.querySelector(six).style.display = "none";
}
function close_all(one, two, three, four, five, six) {
    document.querySelector(one).style.display = "none";
    document.querySelector(two).style.display = "none";
    document.querySelector(three).style.display = "none";
    document.querySelector(four).style.display = "none";
    document.querySelector(five).style.display = "none";
    document.querySelector(six).style.display = "none";
    document.querySelector("#errorMsg").style.display = "none";
}
function open_query_form() {
    document.querySelector(".query").style.display = "none";
    document.querySelector(".query_form").style.display = "block";
}
function close_query_form() {
    document.querySelector(".query_form").style.display = "none";
    document.querySelector(".query").style.display = "block";
}