/////REG MODAL


$("#regBtn").on('click',function(){
    // $("#RegModal").css('display','block');
    $("#RegModal").fadeIn(300);
    $("#RegModal").animate({opacity:'1'},'500');
});


$("#regTimes").on('click',function(){
    $("#RegModal").fadeOut(300);
    $("#RegModal").animate({opacity:'0'},'500');
});

window.addEventListener('click',function(event){
    var regModal = document.getElementById("RegModal");
    if (event.target == regModal) {
        // regModal.style.display = "none";
        // regModal.style.opacity = "0";
        $("#RegModal").fadeOut(300);
        $("#RegModal").animate({opacity:'0'},'500');
    }
});


//////color change

$("input").on('blur',function(event){
    if ($(event.target).val() == "") {
        // alert("Please write your" + " " + event.target.placeholder);
        $(event.target).css("background-color","rgba(114, 156, 208, 0.308)");
    }else {
        $(event.target).css("background-color","transparent");
    }
});

/////password
const showPassBtn = document.getElementById("RegShowPass");
const passInput = document.getElementsByClassName("pass");
showPassBtn.addEventListener('click',function(){
    for (var i=0; i<passInput.length; i++) {
        if (passInput[i].type == "password") {
            passInput[i].type = "text";
            showPassBtn.innerHTML = "Hide Password";
        }else {
            passInput[i].type = "password"
            showPassBtn.innerHTML = "Show Password"
        }
    }
});


//for first name
$("#RGfirstName").on('blur',function(){
    fnameCheck($("#RGfirstName"));
});

function fnameCheck(input) {
    if (input.val().match(nameRegex)) {
        popups[0].style.visibility = "hidden";
    }else if (input.val() == "") {
    }else {
        input.css("background-color","rgba(250, 250, 0, 0.714)");
        popups[0].style.visibility = "visible";
        popups[0].innerHTML = "Please enter your correct First name";
    }
}

//for last name
$("#RGlastName").on('blur',function(){
    lnameCheck($("#RGlastName"));
});

function lnameCheck(input) {
    if (input.val().match(nameRegex)) {
        popups[1].style.visibility = "hidden";
    }else if (input.val() == "") {
    }else {
        input.css("background-color","rgba(250, 250, 0, 0.714)");
        popups[1].style.visibility = "visible";
        popups[1].innerHTML = "Please enter your correct Last name";
    }
}

//for email
let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
$("#RGemail").on('blur',function(){
    emailCheck($("#RGemail"));
});

function emailCheck(input) {
    if (input.val().match(emailRegex)) {
        popups[2].style.visibility = "hidden";
    }else if (input.val() == "") {
    }else {
        input.css("background-color","rgba(250, 250, 0, 0.714)");
        popups[2].style.visibility = "visible";
        popups[2].innerHTML = "Please enter your correct Email";
    }
}

//for phone number 
let telRegex = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
$("#RGtel").on('blur',function(){
    telCheck($("#RGtel"));
});

function telCheck(input) {
    if (input.val().match(telRegex)) {
        popups[3].style.visibility = "hidden";
    }else if (input.val() == "") {
    }else {
        input.css("background-color","rgba(250, 250, 0, 0.714)");
        popups[3].style.visibility = "visible";
        popups[3].innerHTML = "Please enter your correct phone number";

    }
}


/////LOG MODAL

const logBtn = document.getElementById("logBtn");
const logTimes = document.getElementById("logTimes");
const logModal = document.getElementById("LogModal");

$("#logBtn").on('click',function(){
    // $("#RegModal").css('display','block');
    $("#LogModal").fadeIn(300);
    $("#LogModal").animate({opacity:'1'},'500');
});


$("#logTimes").on('click',function(){
    $("#LogModal").fadeOut(300);
    $("#LogModal").animate({opacity:'0'},'500');
});

window.addEventListener('click',function(event){
    if (event.target == logModal) {
        $("#LogModal").fadeOut(300);
        $("#LogModal").animate({opacity:'0'},'500');
    }
});

//Show password

$("#logShowPass").on('click',function(){
    if ($("#LGpass").attr("type") == "password") {
        $("#LGpass").attr("type","text");
        $("#logShowPass").html("Hide Password");
    }else {
        $("#LGpass").attr("type","password");
        $("#logShowPass").html("Show Password"); 
    }
});

//Chose email or phone number 
var radios = $("input[name=login]");
radios.on('click',function(event){
    if ($(event.target).attr("id") == "logEmail") {
        $(".logEmail").css("display","block");
        $(".logTel").css("display","none");
    }else {
        $(".logEmail").css("display","none");
        $(".logTel").css("display","block");
        $("#LGemail").val("example@test.com");
    }
});

//name validation
var nameRegex = /^[a-zA-Z ]{2,30}$/;

$("#LGfirstName").on('blur',function(){
    if ($("#LGfirstName").val().match(nameRegex)) {
        popups[5].style.visibility = "hidden";
    }else {
        $("#LGfirstName").css("background-color","rgba(250, 250, 0, 0.714)");
        popups[5].style.visibility = "visible";
        popups[5].innerHTML = "Please enter your correct First Name";
    }
});

$("#LGlastName").on('blur',function(){
    if ($("#LGlastName").val().match(nameRegex)) {
        popups[6].style.visibility = "hidden";
    }else {
        $("#LGlastName").css("background-color","rgba(250, 250, 0, 0.714)");
        popups[6].style.visibility = "visible";
        popups[6].innerHTML = "Please enter your correct Last Name";
    }
});

$("#LGemail").on('blur',function(){
    if ($("#LGemail").val().match(emailRegex)) {
        popups[7].style.visibility = "hidden";
    }else {
        $("#LGemail").css("background-color","rgba(250, 250, 0, 0.714)");
        popups[7].style.visibility = "visible";
        popups[7].innerHTML = "Please enter your correct Email";
    }
});

$("#LGtel").on('blur',function(){
    if ($("#LGtel").val().match(telRegex)) {
        popups[8].style.visibility = "hidden";
    }else {
        $("#LGtel").css("background-color","rgba(250, 250, 0, 0.714)");
        popups[8].style.visibility = "visible";
        popups[8].innerHTML = "Please enter your correct Phone number";
    }
});





let regForm = document.getElementById("regForm");
let popups = document.getElementsByClassName("popuptext");

var pCodRegex = /[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/;

$("#RGzip").on('blur',function(){
    if ($("#RGzip").val().match(pCodRegex)) {
        popups[4].style.visibility = "hidden";
    }else {
        $("#RGzip").css("background-color","rgba(250, 250, 0, 0.714)");
        popups[4].style.visibility = "visible";
        popups[4].innerHTML = "Please enter your correct Zip code";
    }
});




regForm.addEventListener('submit',function(event){
    var fname = document.getElementById("RGfirstName");
    var lname = document.getElementById("RGlastName");
    var email = document.getElementById("RGemail");
    var phone = document.getElementById("RGtel");
    var pCode = document.getElementById("RGzip");
    if (fname.value.match(nameRegex) && lname.value.match(nameRegex) && email.value.match(emailRegex) && phone.value.match(telRegex) && pCode.value.match(pCodRegex) && passInput[0].value == passInput[1].value) {    
        $("#regPop").animate({left:'34%'},'slow');
        $("#regPop").animate({top:'30px'},'slow');
        $("#regPop").fadeOut(6000);
        $("#RegModal").fadeOut(2000);
        $("#RegModal").animate({opacity:'0'},'500');
    }else {
        event.preventDefault();
        alert("Something went wrong. Please check the form.");
    }
    if (passInput[0].value == passInput[1].value) {
    }else {
        alert("Passwords didn't match")
        event.preventDefault();
    }

});

let logForm = document.getElementById("logForm");

logForm.addEventListener('submit',function(event){
    var Fname = document.getElementById("LGfirstName");
    var Lname = document.getElementById("LGlastName");
    var Email = document.getElementById("LGemail");
    var Phone = document.getElementById("LGtel");
    if (Fname.value.match(nameRegex) && Lname.value.match(nameRegex) && Email.value.match(emailRegex) && Phone.value.match(telRegex)) {
        $("#LogModal").animate({opacity:'0'},'500');
    }else {
        event.preventDefault();
        alert("Something went wrong. Please check the form.");
    }
});



