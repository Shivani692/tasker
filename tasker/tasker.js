function sign() {
    var emaill = document.getElementById("email").value
    var passwordd = document.getElementById("pass").value
    var names = "abcd@gmail.com"
    var pass = "123456"
    if (emaill == names && passwordd == pass) {
        window.location.href = "second.html";
    }
    else {
        window.alert("Entered is invalid");
    }

}

